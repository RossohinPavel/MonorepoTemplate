import { Injectable } from '@nestjs/common';

import * as shared from "@project/shared";

@Injectable()
export class AppService {
  getHello(): string {
    return shared.sayHello();
  }
}
