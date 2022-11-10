import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'
import { ConfigService } from './providers';
import { CommunicationService } from './providers';

@Global()
@Module({
    imports: [
        HttpModule
    ],
    providers: [
        ConfigService,
        {
            provide: 'USER_SERVICE',
            useFactory: (httpService: HttpService, configService: ConfigService) => {
                return new CommunicationService('user', httpService, configService)
            },
            inject: [HttpService, ConfigService],
        },
        {
            provide: 'AUTHENTICATION_SERVICE',
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