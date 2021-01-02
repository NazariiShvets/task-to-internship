import express, {
  Application, Request, Response, Router,
} from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { db } from './db';
import Teacher from './Teacher';

const app: Application = express();
const teachersRouter: Router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/teachers', teachersRouter);

teachersRouter.get('/', Teacher.getAllTeachers);
teachersRouter.get('/:id', Teacher.getTeacherById);
teachersRouter.post('/create', Teacher.createTeacher);
teachersRouter.put('/:id', Teacher.updateTeacher);
teachersRouter.delete('/:id', Teacher.deleteTeacher);

app.get('/', Teacher.getTargetMathTeachers);

db.authenticate().then(() => {
  console.log('Database connect');
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
});
