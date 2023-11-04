import { Module } from '@nestjs/common';
import { CheckModule } from './check/check.module';
import { WikiModule } from './wiki/wiki.module';
import { GoogleTrendsModule } from './google_trends/google_trends.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
    CheckModule,
    WikiModule,
    GoogleTrendsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
