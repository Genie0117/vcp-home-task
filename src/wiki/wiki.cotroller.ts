import { Body, Controller, Post } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { removeHtmlTags } from './utils';

@Controller('wiki')
export class WikiController {
  constructor(private readonly wikiService: WikiService) {}

  @Post('search')
  async search(@Body('query') query: string) {
    const data = await this.wikiService.getWikiSearch(query);
    const {
      query: { search, searchinfo },
    } = data;
    const numberOfHits = searchinfo?.totalhits ?? 0;
    const firstHit = removeHtmlTags(search?.[0]?.snippet ?? '');

    return { firstHit, numberOfHits };
  }
}
