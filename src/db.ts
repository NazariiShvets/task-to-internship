import { DataTypes, Model, Sequelize } from 'sequelize';
import {
  dbPassword, dbName, dbUser, dbTeachersTableName,
} from './config';
import { enumToArray } from './utils';
import { ESex, EUniversities, ITeacher } from './model';

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
    type: DataTypes.STRING,
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
