import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { GetWikiSearchData } from './types';

const EXTERNAL_API_URL = 'https://en.wikipedia.org/w/api.php';

@Injectable()
export class WikiService {
  constructor(private readonly httpService: HttpService) {}

  async getWikiSearch(query: string): Promise<GetWikiSearchData> {
    const params = {
      action: 'query',
      list: 'search',
      format: 'json',
      srsearch: query,
    };
    const { data } = await lastValueFrom(
      this.httpService.get(EXTERNAL_API_URL, { params }),
    );
    return data;
  }
}
