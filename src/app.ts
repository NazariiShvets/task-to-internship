import express, {
  Application, Request, Response, Router,
} from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { db } from './db';

const app: Application = express();
const teachersRouter: Router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/teachers', teachersRouter);

teachersRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('All teachers');
});
teachersRouter.get('/:id', (req: Request, res: Response) => {
  res.status(200).send(`${req.params.id} teacher`);
});
teachersRouter.post('/create', (req: Request, res: Response) => {
  res.status(200).send('Created teachers');
});
teachersRouter.put('/:id', (req: Request, res: Response) => {
  res.status(200).send(`Updated ${req.params.id} teacher`);
});
teachersRouter.delete('/:id', (req: Request, res: Response) => {
  res.status(200).send(`Deleted ${req.params.id} teacher`);
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello');
});

db.authenticate().then(() => {
  console.log('Database connect');
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
});
