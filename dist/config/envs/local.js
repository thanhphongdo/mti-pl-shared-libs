"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    env: process.env.NODE_ENV,
    db: {
        user: "mongodb://localhost:27017/nest"
    },
    jwt: {
        secret: 'jwt-secret',
        refreshSecret: 'jwt-refresh-secret',
        expiresIn: 60 * 60 * 24
    },
    ports: {
        gateway: 3000,
        authentication: 3001,
        user: 3002
    },
    serviceDomain: {
        gateway: 'http://localhost:3000',
        authentication: 'http://localhost:3001',
        user: 'http://localhost:3002'
    }
};
//# sourceMappingURL=local.js.map