import path from 'path';
import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, './.db/dev.sqlite3'),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    // client: "pg",
    // connection: {
    //   host: process.env.DB_HOST,
    //   port: parseInt(process.env.DB_PORT || '5432'),
    //   user: process.env.DB_USER,
    //   database: process.env.DB_NAME,
    //   password: process.env.DB_PASSWORD,
    //   ssl: process.env.DB_SSL === 'true' ?
    //     { rejectUnauthorized: false } :
    //     false,
    // },
  },

  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, './.db/test.sqlite3'),
    }
  },

  staging: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, './.db/staging.sqlite3'),
    }
  },

  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: '/app/db/prod.sqlite3',
    }
  }
  // production: {
  //   client: "pg",
  //   connection: {
  //     host: process.env.DB_HOST,
  //     port: parseInt(process.env.DB_PORT || '5432'),
  //     user: process.env.DB_USER,
  //     database: process.env.DB_NAME,
  //     password: process.env.DB_PASSWORD,
  //     ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};

module.exports = config;
