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
}

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
  },
  sex: {
    type: DataTypes.ENUM,
    values: enumToArray(ESex),
    allowNull: false,
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  workedInUniversities: {
    type: DataTypes.ENUM,
    values: enumToArray(EUniversities),
    defaultValue: EUniversities[EUniversities.OurTestSchool],
  },
}, {
  sequelize: db,
  modelName: 'Teacher',
  tableName: dbTeachersTableName,
});

export class Classroom extends Model<IClassroom> {
}

Classroom.init({}, {
  sequelize: db,
  modelName: 'Classroom',
  tableName: dbClassroomTableName,
});

export class Lesson extends Model<ILesson> {
}

Lesson.init({
  startLesson: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },

  },
  days: {
    type: DataTypes.ENUM,
    values: enumToArray(EDays),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Lesson',
  tableName: dbLessonsTableName,
});
