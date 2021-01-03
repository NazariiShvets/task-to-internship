import { dbPassword, dbName, dbUser } from './config';
// import { Sequelize } from 'sequelize';
//
// export const db = new Sequelize(dbName, dbUser, password, {
//   host: 'localhost',
//   dialect: 'postgres',
//   // models: [__dirname + '/models'],
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });

const { Pool } = require('pg');

export const db = new Pool({
  user: dbUser,
  host: 'localhost',
  database: dbName,
  password: dbPassword,
  port: 5432,
});
console.log('PostgreSQL connected...');
