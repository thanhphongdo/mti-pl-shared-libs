"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    env: process.env.NODE_ENV,
    db: {
        mongodb: process.env.MONGODB
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET
    },
    ports: {
        authentication: process.env.authentication_service_port,
        user: process.env.user_service_port
    }
};
//# sourceMappingURL=production.js.map