"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
const cors = require("cors");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use(session({ secret: "nest is awesome" }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get("PORT", 3000);
    app.enableCors({
        origin: "*",
        methods: "GET, PUT, POST, DELETE",
        allowedHeaders: "Content-Type, Authorization",
    });
    app.use(cors());
    app.listen(port, "0.0.0.0", async () => {
        console.log(`Application is running on: ${await app.getUrl()}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map