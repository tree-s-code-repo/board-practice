import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.stratgy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: 5432,
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DATABASE'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
    BoardsModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], //여기서 사용하기 위해
  exports: [JwtStrategy, PassportModule], //다른 모듈에서 사용하기 위해
})
export class AppModule {}
