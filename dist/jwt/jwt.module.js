"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../common");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let JWTModule = class JWTModule {
};
JWTModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [common_2.CommonModule],
                useFactory: (configService) => {
                    return {
                        secret: configService.get('jwt.secret'),
                        signOptions: { expiresIn: `${configService.get('jwt.expiresIn')}s` }
                    };
                },
                inject: [common_2.ConfigService]
            }),
            common_2.CommonModule
        ],
        controllers: [],
        providers: [jwt_strategy_1.JwtStrategy]
    })
], JWTModule);
exports.JWTModule = JWTModule;
//# sourceMappingURL=jwt.module.js.map