import { Request, Response } from 'express';
import { Teacher } from './db';

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const filter = { where: req.query };
    const teachers: Array<Teacher> = await Teacher.findAll(filter);
    res.status(200).json({ teachers });
  } catch (error) {
    res.status(400).json({ description: error.message || 'Something went wrong' });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const filter = { where: { id } };
    if (Number.isNaN(filter.where.id)) {
      res.status(400).json({ description: 'Error : Bad request' });
    }
    const teacher: Teacher | null = await Teacher.findOne(filter);
    if (!teacher) {
      res.status(404).json({ description: 'Not found' });
    }
    res.status(200).json({ teacher });
  } catch (error) {
    res.status(400).json({ description: error.message || 'Something went wrong' });
  }
};

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher: Teacher = await Teacher.create(req.body);
    res.status(201).json({ created: true, description: 'OK', teacher });
  } catch (error) {
    res.status(400).json({ created: false, description: error.message || 'Error : Bad request' });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  try {
    // if some keys of fields is same as ITeacher this keys will been updated ,
    // but keys which are syntax incorrect not throw an Error and not updated.
    // fix
    const updateFields = req.body;

    const id: number = Number(req.params.id);
    const filter = { where: { id } };
    if (Number.isNaN(filter.where.id)) {
      res.status(400).json({ description: 'Error : Bad request' });
    }

    const updatedTeacher: [number, Teacher[]] = await Teacher.update(updateFields, filter);

    if (!updatedTeacher[0]) {
      res.status(404).json({ description: 'Something went wrong' });
    }

    res.status(200).json({ updatedTeacher });
  } catch (error) {
    res.status(400).json({ description: error.message || 'Error : Bad request' });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const filter = { where: { id } };
    if (Number.isNaN(id)) {
      throw new Error('Invalid id');
    }
    const destroyed: number = await Teacher.destroy(filter);
    if (!destroyed) {
      res.status(404).json({ description: 'Not found' });
    }
    res.status(200).json({ description: `Deleted teacher with id = ${req.params.id}` });
  } catch (error) {
    res.status(400).json({ description: error.message || 'Error : Bad request' });
  }
};

export const getTargetMathTeachers = (req: Request, res: Response) => {
  res.status(200).send('getMathTeachersWithExpWithPairs');
};
