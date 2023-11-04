import { Controller, Get } from '@nestjs/common';
import { CheckService } from './check.service';

@Controller('check')
export class CheckController {
  constructor(private readonly appService: CheckService) {}

  @Get()
  getHello() {
    return this.appService.getCreator();
  }
}
