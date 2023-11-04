import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { GoogleTrendsService } from './google_trends.service';
import { TrendsInterestOverTimeData } from './types';

const CACHE_TTL = 6 * 1000; // ms
@Controller('google-trends')
export class GoogleTrendsController {
  constructor(private readonly googleTrendsService: GoogleTrendsService) {}

  @Get('search')
  @CacheTTL(CACHE_TTL)
  @UseInterceptors(CacheInterceptor)
  async getTrendsInterestOverTime(
    @Query('query') query: string,
  ): Promise<TrendsInterestOverTimeData> {
    const data =
      await this.googleTrendsService.getTrendsInterestOverTime(query);

    return data;
  }
}
