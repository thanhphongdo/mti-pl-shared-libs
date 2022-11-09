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
        authentication: process.env.authentication_service_port,
        user: process.env.user_service_port
    }
};