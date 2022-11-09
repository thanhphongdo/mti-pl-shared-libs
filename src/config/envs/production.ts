export const config = {
    env: process.env.NODE_ENV,
    db: {
        mongodb: process.env.MONGODB
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET
    },
    ports: {
        authentication: process.env.AUTHENTICATION_SERVICE_PORT,
        user: process.env.USER_SERVICE_PORT
    }
};