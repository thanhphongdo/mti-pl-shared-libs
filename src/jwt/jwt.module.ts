import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CommonModule, ConfigService } from '../common';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [CommonModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('jwt.secret'),
          signOptions: { expiresIn: `${configService.get('jwt.expiresIn')}s` }
        }
      },
      inject: [ConfigService]
    }),
    CommonModule
  ],
  controllers: [],
  providers: [JwtStrategy]
})
export class JWTModule { }
