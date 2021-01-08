// Helper
import { Teacher } from './db';

export const stringIsNumber = (value: string): boolean => !Number.isNaN(Number(value));

// Turn enum into array
export const enumToArray = (enums: any) => Object
  .keys(enums)
  .filter(stringIsNumber)
  .map((key: string) => enums[key]);

export const checkIdReturnNumberOrException = (id: string): number => {
  const idNum: number = +id;
  if (!idNum) throw new Error('Invalid id');
  return idNum;
};

export const uniqueTeachersArray = (arr: Array<Teacher>): Array<Teacher> => arr
  .filter((teacher: Teacher, index: number, self: Array<Teacher>): boolean => index === self
    .findIndex((t: Teacher): boolean => t.id === teacher.id));
