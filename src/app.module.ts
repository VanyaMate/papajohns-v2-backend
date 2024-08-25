import { Module } from '@nestjs/common';
import { ServicesModule } from './nest/modules/services/services.module';
import { ApiModule } from './nest/modules/api/api.module';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports  : [
        ConfigModule.forRoot({
            envFilePath: `.env.${ process.env.NODE_ENV }`,
            isGlobal   : true,
        }),
        ServicesModule,
        ApiModule,
    ],
    providers: [],
})
export class AppModule {
}
