import { Injectable } from "@nestjs/common";
import * as shared from "@project/shared";


@Injectable()
export class AppService {

  ping(): string {
    return "pong";
  }

  getHello(): string {
    return shared.sayHello();
  }

}
