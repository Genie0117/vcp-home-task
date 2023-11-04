import { Module } from '@nestjs/common';
import { WikiController } from './wiki.cotroller';
import { WikiService } from './wiki.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WikiController],
  providers: [WikiService],
  exports: [WikiService],
})
export class WikiModule {}
