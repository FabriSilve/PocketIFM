import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LOGIN_RESPONSE } from './login.service';
import { NOTIFICATION_RESPONSE } from './notification.service';
import { DATAPANEL_RESPONSE } from './data-panel.service';
import { TRAFFIC_RESPONSE } from './traffic.service';
import { TRANSACTIONS } from '../const/const';
import { TRANSACTIONS_RESPOSE } from './transactions.service';


@Injectable()
export class MockDataService implements InMemoryDbService {

  createDb() {
    const login = LOGIN_RESPONSE;
    const notification = NOTIFICATION_RESPONSE;
    const datapanel = DATAPANEL_RESPONSE;
    const traffic = TRAFFIC_RESPONSE;
    const transactions = TRANSACTIONS_RESPOSE;
    return {login, notification, datapanel, traffic, transactions};
  }

}
