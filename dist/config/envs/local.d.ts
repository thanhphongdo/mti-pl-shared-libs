export declare const config: {
    env: string;
    db: {
        mongodb: string;
    };
    jwt: {
        secret: string;
        refreshSecret: string;
        expiresIn: number;
    };
    ports: {
        gateway: number;
        authentication: number;
        user: number;
    };
    serviceDomain: {
        gateway: string;
        authentication: string;
        user: string;
    };
};
