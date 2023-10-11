import { Injectable } from '@angular/core';
import { LogLevel } from '../models/loglevels';

@Injectable({
  providedIn: 'root',
})
export class loggingService {
  logLevel: LogLevel = new LogLevel();

  rootLevel() {
    console.log('Service loaded from root level');
  }

  info(msg: string): void {
    this.logWith(this.logLevel.info, msg);
  }
  warn(msg: string): void {
    this.logWith(this.logLevel.warn, msg);
  }
  error(msg: string): void {
    this.logWith(this.logLevel.error, msg);
  }

  private logWith(level: any, msg: string): void {
    if (level <= this.logLevel.error) {
      switch (level) {
        case this.logLevel.none:
          return console.log(msg);
        case this.logLevel.info:
          return console.info(msg);
        case this.logLevel.warn:
          return console.warn(msg);
        case this.logLevel.error:
          return console.error(msg);
      }
    }
  }
}
