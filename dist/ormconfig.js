"use strict";
const env_1 = require("./src/env");
module.exports = {
    host: env_1.default.DB_CONFIG.host,
    type: 'mysql',
    port: env_1.default.DB_CONFIG.port,
    username: env_1.default.DB_CONFIG.username,
    password: env_1.default.DB_CONFIG.password,
    database: env_1.default.DB_CONFIG.database,
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
//# sourceMappingURL=ormconfig.js.map