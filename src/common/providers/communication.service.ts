import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from './config.service';
import { Request } from 'express';

@Injectable()
export class CommunicationService {

    constructor(private serviceName: string, private httpService: HttpService, private configService: ConfigService) { }

    async get<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'GET',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data
        });
        return (await lastValueFrom(res)).data as T;
    }

    async post<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'POST',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data
        });
        return (await lastValueFrom(res)).data as T;
    }

    async put<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'PUT',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data
        });
        return (await lastValueFrom(res)).data as T;
    }

    async delete<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'DELETE',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data
        });
        return (await lastValueFrom(res)).data as T;
    }

    async forwardRequest<T>(req: Request) {
        const data = JSON.stringify(req.body || {});
        const res = await this.httpService.request({
            method: req.method,
            headers: {
                ...req.headers,
                'content-length': data.length,
                'if-none-match': null
            },
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${req.url}`,
            params: req.params,
            data
        });
        return (await lastValueFrom(res)).data as T;
    }

    getServiceName() {
        return this.serviceName;
    }
}
