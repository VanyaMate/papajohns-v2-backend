import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PORT } from '@/domain/consts/env';


async function bootstrap () {
    const app: INestApplication = await NestFactory.create(
        AppModule,
        {
            cors  : {
                origin     : (origin, callback) => {
                    callback(null, origin);
                },
                credentials: true,
            },
            logger: [ 'log', 'fatal', 'error', 'warn', 'debug', 'verbose' ],
        });

    const configService: ConfigService = app.get<ConfigService>(ConfigService);
    const port: string                 = configService.get<string>(PORT);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    await app.listen(port);
}

bootstrap();
