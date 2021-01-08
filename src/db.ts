import { DataTypes, Model, Sequelize } from 'sequelize';
import {
  dbPassword, dbName, dbUser, dbTeachersTableName, dbLessonsTableName, dbClassroomTableName,
} from './config';
import { enumToArray } from './utils';
import {
  EDays, ESex, ESubjects, EUniversities, IClassroom, ILesson, ITeacher,
} from './model';

export const db: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'postgres',
});

export class Teacher extends Model<ITeacher> {
  id!: number;
}

export class Lesson extends Model<ILesson> {
}

export class Classroom extends Model<IClassroom> {
}

Classroom.init({}, {
  sequelize: db,
  modelName: 'Classroom',
  tableName: dbClassroomTableName,
});

Lesson.init({
  url: DataTypes.STRING,
  subject: {
    type: DataTypes.ENUM,
    values: enumToArray(ESubjects),
    allowNull: false,
  },
  days: {
    type: DataTypes.ENUM,
    values: enumToArray(EDays),
    allowNull: false,
  },
  from: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  to: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  classroom_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      // @ts-ignore
      model: Classroom,
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'Lesson',
  tableName: dbLessonsTableName,
});

Teacher.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject: {
    type: DataTypes.ENUM,
    values: enumToArray(ESubjects),
    allowNull: false,
    references: {
      // @ts-ignore
      model: Lesson,
      key: 'subject',
    },
  },
  sex: {
    type: DataTypes.ENUM,
    values: enumToArray(ESex),
    allowNull: false,
  },
  years_of_experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  worked_in_universities: {
    type: DataTypes.ENUM,
    values: enumToArray(EUniversities),
    defaultValue: EUniversities[EUniversities.OurTestSchool],
  },
}, {
  sequelize: db,
  modelName: 'Teacher',
  tableName: dbTeachersTableName,
});
