import { Sequelize } from 'sequelize';
import { password } from './config';

export const db = new Sequelize('task-to-intership', 'postgres', password, {
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
