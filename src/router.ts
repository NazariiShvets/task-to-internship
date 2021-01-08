import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import { db, Teacher } from './db';
import { checkIdReturnNumberOrException } from './utils';

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const filter = { where: req.query };
    const teachers: Array<Teacher> = await Teacher.findAll(filter);

    console.log('getAllTeachers response : ', teachers);
    res.status(200).json({ teachers });
  } catch (error) {
    res.status(400).json({ description: error.message || 'Something went wrong' });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const id: number = checkIdReturnNumberOrException(req.params.id);

    const filter = { where: { id } };
    const teacher: Teacher | null = await Teacher.findOne(filter);

    if (!teacher) res.status(404).json({ description: 'Not found' });

    res.status(200).json({ teacher });
  } catch (error) {
    res.status(400).json({ description: error.message });
  }
};

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher: Teacher = await Teacher.create(req.body);
    res.status(201).json({ created: true, description: 'Created !', teacher });
  } catch (error) {
    res.status(400).json({ created: false, description: error.message });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  try {
    // if some keys of fields is same as ITeacher this keys will been updated ,
    // but keys which are syntax incorrect not throw an Error and not updated.
    const updateFields = req.body;

    const id: number = checkIdReturnNumberOrException(req.params.id);

    const filter = { where: { id } };
    const updatedTeacher: [number, Teacher[]] = await Teacher.update(updateFields, filter);

    if (!updatedTeacher[0]) res.status(400).json({ description: 'Something went wrong', updated: false });

    res.status(200).json({ description: 'Updated!', updated: true });
  } catch (error) {
    res.status(400).json({ description: error.message, updated: false });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const id: number = checkIdReturnNumberOrException(req.params.id);

    const filter = { where: { id } };
    const destroyed: number = await Teacher.destroy(filter);

    if (!destroyed) res.status(404).json({ description: 'Not found', deleted: false });

    res.status(200).json({ description: `Deleted teacher with id = ${req.params.id}`, deleted: true });
  } catch (error) {
    res.status(400).json({ description: error.message, deleted: false });
  }
};

export const getTargetMathTeachers = async (req: Request, res: Response) => {
  try {
    const sql = `SELECT DISTINCT t.*
                 FROM teachers t
                 LEFT JOIN lessons l
                 ON l.subject::varchar(255) = t.subject::varchar(255)
                 LEFT JOIN classrooms c
                 ON c.id = l.classroom_id
                 WHERE t.subject = 'Math' AND t.years_of_experience >= 10
                 AND c.id = 100 AND l.day = 'Thursday'
                 AND l.from >= time '08:30' AND l.to <= time '14:30'
                 `;
    const teachers: Array<Teacher> = await db.query(sql, {
      type: QueryTypes.SELECT,
    });

    console.log('getTargetMathTeachers response : ', teachers);
    res.status(200).json({ teachers });
  } catch (error) {
    res.status(400).json({ description: error.message });
  }
};
