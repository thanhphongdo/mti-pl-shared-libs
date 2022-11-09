"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    env: process.env.NODE_ENV,
    db: {
        user: process.env.DB_USER,
        other: process.env.DB_OTHER
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.EXPIRES_IN
    },
    ports: {
        gateway: process.env.GATEWAY_PORT,
        authentication: process.env.AUTHENTICATION_SERVICE_PORT,
        user: process.env.USER_SERVICE_PORT
    },
    serviceDomain: {
        gateway: process.env.GATEWAY_DOMAIN,
        authentication: process.env.AUTHENTICATION_DOMAIN,
        user: process.env.USER_SERVICE_DOMAIN
    }
};
//# sourceMappingURL=default.js.map