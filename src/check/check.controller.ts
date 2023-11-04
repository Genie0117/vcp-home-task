import { Controller, Get } from '@nestjs/common';
import { CheckService } from './check.service';
import { CreatorData } from './types';

@Controller('check')
export class CheckController {
  constructor(private readonly appService: CheckService) {}

  @Get()
  getCreator(): CreatorData {
    return this.appService.getCreator();
  }
}
