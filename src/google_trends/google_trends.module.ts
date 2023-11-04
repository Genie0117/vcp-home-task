import { Module } from '@nestjs/common';
import { GoogleTrendsService } from './google_trends.service';
import { GoogleTrendsController } from './google_trends.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GoogleTrendsService],
  controllers: [GoogleTrendsController],
})
export class GoogleTrendsModule {}
