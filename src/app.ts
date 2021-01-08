import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { db } from './db';
import {
  createTeacher, deleteTeacher, getAllTeachers, getTargetMathTeachers, getTeacherById,
  updateTeacher,
} from './router';

const app: Application = express();
const teachersRouter: Router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/teachers', teachersRouter);

teachersRouter.get('/', getAllTeachers);
teachersRouter.get('/:id', getTeacherById);
teachersRouter.post('/create', createTeacher);
teachersRouter.put('/:id', updateTeacher);
teachersRouter.delete('/:id', deleteTeacher);

app.get('/', getTargetMathTeachers);

db.authenticate().then(async () => {
  try {
    await db.sync({ force: false });
    console.log('Database connect');
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (e) {
    console.error(e.message);
  }
});
