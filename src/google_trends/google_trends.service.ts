import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { TrendsInterestOverTimeData } from './types';

const EXTERNAL_API_URL = 'https://serpapi.com';
@Injectable()
export class GoogleTrendsService {
  constructor(private readonly httpService: HttpService) {}

  async getTrendsInterestOverTime(
    query: string,
  ): Promise<TrendsInterestOverTimeData> {
    const params = {
      engine: 'google_trends',
      q: query,
      data_type: 'TIMESERIES',
      api_key: process.env.GOOGLE_TRENDS_API_KEY, // 62df7d96eacb4604176ab7e3f0878c89e61dc72dfe272d95af8f6effe614f0d0 - if you want to test it localy
    };

    const { data } = await lastValueFrom(
      this.httpService.get(`${EXTERNAL_API_URL}/search.json`, { params }),
    );

    return data;
  }
}
