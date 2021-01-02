import { Sequelize } from 'sequelize';
import { password, dbName, dbUser } from './config';

export const db = new Sequelize(dbName, dbUser, password, {
  host: 'localhost',
  dialect: 'postgres',
  // models: [__dirname + '/models'],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
