import { Component, OnInit } from '@angular/core';
import { loggingService } from '../../services/loggerservice';
import { userServiceComp } from '../../services/userservicecomp';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss'],
  providers: [userServiceComp],
})
export class LoggingComponent implements OnInit {
  constructor(
    private logger: loggingService,
    private userService: userServiceComp
  ) {}

  rootLevelmsg: string = 'Service loaded from root level';
  componentLevelmsg: string = 'Service loaded from providers array';

  ngOnInit() {
    this.userService.componentLevel();
    this.logger.rootLevel();
    this.sendToPage;
  }

  sendToPage(event: any) {
    this.rootLevelmsg = event;
    this.componentLevelmsg = event;
  }

  infoLog(): void {
    this.logger.info('Testing info log button');
  }

  warnLog(): void {
    this.logger.warn('Testing warn log button');
  }

  errorLog(): void {
    this.logger.error('Testing error log button');
  }
}
