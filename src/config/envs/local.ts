// export * from './development';
export const config = {
    env: process.env.NODE_ENV,
    db: {
        mongodb: "mongodb://localhost:27017/nest"
    },
    jwt: {
        secret: 'jwt-secret',
        refreshSecret: 'jwt-refresh-secret'
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