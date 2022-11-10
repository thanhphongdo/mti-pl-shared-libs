import { HttpService } from '@nestjs/axios';
import { ConfigService } from './config.service';
import { Request } from 'express';
export declare class CommunicationService {
    private serviceName;
    private httpService;
    private configService;
    constructor(serviceName: string, httpService: HttpService, configService: ConfigService);
    get<T>(url: string, data?: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, headers?: {
        [key: string]: any;
    }): Promise<T>;
    post<T>(url: string, data?: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, headers?: {
        [key: string]: any;
    }): Promise<T>;
    put<T>(url: string, data?: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, headers?: {
        [key: string]: any;
    }): Promise<T>;
    delete<T>(url: string, data?: {
        [key: string]: any;
    }, params?: {
        [key: string]: any;
    }, headers?: {
        [key: string]: any;
    }): Promise<T>;
    forwardRequest<T>(req: Request): Promise<T>;
    getServiceName(): string;
}
