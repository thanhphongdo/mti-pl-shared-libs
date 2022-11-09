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
        authentication: 3000,
        user: 3001
    }
};