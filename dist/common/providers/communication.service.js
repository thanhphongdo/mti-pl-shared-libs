"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const config_service_1 = require("./config.service");
let CommunicationService = class CommunicationService {
    constructor(serviceName, httpService, configService) {
        this.serviceName = serviceName;
        this.httpService = httpService;
        this.configService = configService;
    }
    async get(url, data, params, headers) {
        const res = await this.httpService.request({
            method: 'GET',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}`)}${url}`,
            params: params,
            data
        });
        return (await (0, rxjs_1.lastValueFrom)(res)).data;
    }
    async post(url, data, params, headers) {
        const res = await this.httpService.request({
            method: 'POST',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}`)}${url}`,
            params: params,
            data
        });
        return (await (0, rxjs_1.lastValueFrom)(res)).data;
    }
    async put(url, data, params, headers) {
        const res = await this.httpService.request({
            method: 'PUT',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}`)}${url}`,
            params: params,
            data
        });
        return (await (0, rxjs_1.lastValueFrom)(res)).data;
    }
    async delete(url, data, params, headers) {
        const res = await this.httpService.request({
            method: 'DELETE',
            headers,
            url: `${this.configService.get(`serviceDomain.${this.serviceName}`)}${url}`,
            params: params,
            data
        });
        return (await (0, rxjs_1.lastValueFrom)(res)).data;
    }
    async forwardRequest(req) {
        const data = JSON.stringify(req.body || {});
        const res = await this.httpService.request({
            method: req.method,
            headers: Object.assign(Object.assign({}, req.headers), { 'content-length': data.length, 'if-none-match': null }),
            url: `${this.configService.get(`serviceDomain.${this.serviceName}`)}${req.url}`,
            params: req.params,
            data
        });
        return (await (0, rxjs_1.lastValueFrom)(res)).data;
    }
    getServiceName() {
        return this.serviceName;
    }
};
CommunicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, axios_1.HttpService, config_service_1.ConfigService])
], CommunicationService);
exports.CommunicationService = CommunicationService;
//# sourceMappingURL=communication.service.js.map