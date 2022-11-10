"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = exports.Services = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const providers_1 = require("./providers");
const providers_2 = require("./providers");
exports.Services = {
    USER: 'USER',
    AUTHENTICATION: 'AUTHENTICATION'
};
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule
        ],
        providers: [
            providers_1.ConfigService,
            {
                provide: exports.Services.USER,
                useFactory: (httpService, configService) => {
                    return new providers_2.CommunicationService('user', httpService, configService);
                },
                inject: [axios_1.HttpService, providers_1.ConfigService],
            },
            {
                provide: exports.Services.AUTHENTICATION,
                useFactory: (httpService, configService) => {
                    return new providers_2.CommunicationService('authentication', httpService, configService);
                },
                inject: [axios_1.HttpService, providers_1.ConfigService],
            }
        ],
        exports: [
            providers_1.ConfigService,
            exports.Services.USER,
            exports.Services.AUTHENTICATION
        ]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map