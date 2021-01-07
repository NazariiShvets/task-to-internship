import { Request, Response } from 'express';
import { Teacher } from './db';

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const filters = { where: req.query };
    const teachers: Array<Teacher> = await Teacher.findAll(filters);
    res.status(200).json({ teachers });
  } catch (error) {
    res.status(400).json({ description: 'Error : Bad request' });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher: Teacher = await Teacher.create(req.body);
    res.status(201).json({ created: true, description: 'OK', teacher });
  } catch (error) {
    res.status(400).json({ created: false, description: 'Error : Bad request' });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getTargetMathTeachers = (req: Request, res: Response) => {
  res.status(200).send('getMathTeachersWithExpWithPairs');
};
