import dotenv from 'dotenv';

const result: dotenv.DotenvConfigOutput = dotenv.config();
if (result.error) throw new Error('DoteEnv error');

export const PORT: string | number = process.env.PORT || 3000;
export const dbPassword: string = process.env.DB_PASSWORD!;
export const dbName: string = process.env.DB_NAME!;
export const dbUser: string = process.env.DB_USER!;
export const dbTeachersTableName: string = process.env.DB_TEACHERS_TABLE_NAME!;
export const dbLessonsTableName: string = process.env.DB_LESSONS_TABLE_NAME!;
export const dbClassroomTableName: string = process.env.DB_CLASSROOMS_TABLE_NAME!;
