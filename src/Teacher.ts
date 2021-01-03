import { Request, Response, Errback } from 'express';
import { db } from './db';
import { dbTeachers } from './config';

export default class Teacher {
    static getAllTeachers = (req: Request, res: Response) => {
      db.query(`SELECT * FROM ${dbTeachers}`, (err: Errback, result: any) => {
        if (err) {
          throw err;
        }
        res.status(200).send(result.rows);
      });
    };

    static getTeacherById = (req: Request, res: Response) => {
      const { id } = req.params;
      db.query(`SELECT * FROM ${dbTeachers} WHERE id = ${id}`, (err: Errback, result: any) => {
        if (err) {
          throw err;
        }
        res.status(200).json(result.rows);
      });
    }

    static createTeacher = (req: Request, res: Response) => {
      const { name, age, sex } = req.body;
      db.query(`INSERT INTO ${dbTeachers} (name,sex,age) VALUES ('${name}','${sex}',${age})`, (err: Errback, result: any) => {
        if (err) {
          res.status(400).json('Ошибка');
          throw err;
        }
        res.status(200).send('Пользователь создан');
      });
    }

    static updateTeacher = (req: Request, res: Response) => {
      const {
        id, name, age, sex,
      } = req.body;
      db.query(`UPDATE ${dbTeachers} SET name = '${name}',age=${age},sex='${sex}' WHERE id=${id}`, (err:Errback, result:any) => {
        if (err) {
          res.send('Ошибка');
          throw err;
        }
        res.status(200).send('Пользователь обновлён');
      });
      res.status(200).json(req.body.id);
    }

    static deleteTeacher = (req: Request, res: Response) => {
      const { id } = req.body;
      db.query(`DELETE FROM ${dbTeachers} WHERE id = ${id}`, (err: Errback, result: any) => {
        if (err) {
          res.status(400).send('Произошла ошибка');
          throw err;
        }
        res.status(200).send('Пользователь удалён');
      });
    }

    static getTargetMathTeachers = (req: Request, res: Response) => {
      res.status(200).send('getMathTeachersWithExpWithPairs');
    }
}
