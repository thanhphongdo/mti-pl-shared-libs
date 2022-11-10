import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'
import { ConfigService } from './providers';
import { CommunicationService } from './providers';

export const Services = {
    USER: 'USER',
    AUTHENTICATION: 'AUTHENTICATION'
}

@Global()
@Module({
    imports: [
        HttpModule
    ],
    providers: [
        ConfigService,
        {
            provide: Services.USER,
            useFactory: (httpService: HttpService, configService: ConfigService) => {
                return new CommunicationService('user', httpService, configService)
            },
            inject: [HttpService, ConfigService],
        },
        {
            provide: Services.AUTHENTICATION,
            useFactory: (httpService: HttpService, configService: ConfigService) => {
                return new CommunicationService('authentication', httpService, configService)
            },
            inject: [HttpService, ConfigService],
        }
    ],
    exports: [
        ConfigService,
        'USER_SERVICE',
        'AUTHENTICATION_SERVICE'
    ]
})
export class CommonModule {

}