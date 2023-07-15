import env from './src/env';

export = {
  host: env.DB_CONFIG.host,
  type: 'mysql',
  port: env.DB_CONFIG.port,
  username: env.DB_CONFIG.username,
  password: env.DB_CONFIG.password,
  database: env.DB_CONFIG.database,
  entities: [
    'src/**/**.entity{.ts,.js}',
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
};