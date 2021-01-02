import { Request, Response } from 'express';

export default class Teacher {
    static getAllTeachers = (req: Request, res: Response) => {
      res.status(200).send('All teachers');
    };

    static getTeacherById = (req: Request, res: Response) => {
      res.status(200).json(req.params);
    }

    static createTeacher = (req: Request, res: Response) => {
      res.status(200).json(req.body);
    }

    static updateTeacher = (req: Request, res: Response) => {
      res.status(200).json(req.params.id);
    }

    static deleteTeacher = (req: Request, res: Response) => {
      res.status(200).json(req.params.id);
    }

    static getTargetMathTeachers = (req:Request, res:Response) => {
      res.status(200).send('getMathTeachersWithExpWithPairs');
    }
}