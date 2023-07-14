"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use(session({ secret: 'nest is awesome' }));
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    app.use(cors());
    await app.listen(process.env.PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map