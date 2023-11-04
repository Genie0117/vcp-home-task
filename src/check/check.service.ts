import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckService {
  getCreator(): { creator: string } {
    return { creator: 'Evgenii Tachalov' };
  }
}
