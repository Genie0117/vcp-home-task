import { Body, Controller, Post } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { removeHtmlTags } from './utils';
import { SearchFirstHitResponseData } from './types';

@Controller('wiki')
export class WikiController {
  constructor(private readonly wikiService: WikiService) {}

  @Post('search')
  async searchFirstHit(
    @Body('query') query: string,
  ): Promise<SearchFirstHitResponseData> {
    const data = await this.wikiService.getWikiSearch(query);
    const {
      query: { search, searchinfo },
    } = data;
    const numberOfHits = searchinfo?.totalhits ?? 0;
    const firstHit = removeHtmlTags(search?.[0]?.snippet ?? '');

    return { firstHit, numberOfHits };
  }
}
