import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class CommunicationService {

    constructor(private serviceName: string, private httpService: HttpService, private configService: ConfigService) { }

    async get<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'GET',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data: data ? JSON.stringify(data) : null
        });
        return (await lastValueFrom(res)).data as T;
    }

    async post<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'POST',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data: data ? JSON.stringify(data) : null
        });
        return (await lastValueFrom(res)).data as T;
    }

    async put<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'PUT',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data: data ? JSON.stringify(data) : null
        });
        return (await lastValueFrom(res)).data as T;
    }

    async delete<T>(url: string, data?: { [key: string]: any }, params?: { [key: string]: any }, headers?: { [key: string]: any }) {
        const res = await this.httpService.request({
            method: 'DELETE',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}` as any)}${url}`,
            params: params,
            data: data ? JSON.stringify(data) : null
        });
        return (await lastValueFrom(res)).data as T;
    }

    getServiceName() {
        return this.serviceName;
    }
}
