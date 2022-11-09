"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    env: process.env.NODE_ENV,
    db: {
        mongodb: "mongodb://localhost:27017/nest"
    },
    jwt: {
        secret: 'jwt-secret',
        refreshSecret: 'jwt-refresh-secret'
    },
    ports: {
        authentication: 3000,
        user: 3001
    }
};
//# sourceMappingURL=local.js.map