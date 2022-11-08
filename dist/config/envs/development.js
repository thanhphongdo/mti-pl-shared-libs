"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    db: {
        mongodb: "mongodb://localhost:27017/nest"
    },
    jwt: {
        secret: 'jwt-secret',
        refreshSecret: 'jwt-refresh-secret'
    }
};
//# sourceMappingURL=development.js.map