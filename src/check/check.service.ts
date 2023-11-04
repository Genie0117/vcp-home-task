import { Injectable } from '@nestjs/common';
import { CreatorData } from './types';

@Injectable()
export class CheckService {
  getCreator(): CreatorData {
    return { creator: 'Evgenii Tachalov' };
  }
}
