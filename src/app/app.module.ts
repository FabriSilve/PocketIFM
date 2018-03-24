import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule }     from './router.module';

import { CookieService } from 'ngx-cookie-service';

//GOOGLE-CHART
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService }  from './service/mock-data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginService } from './service/login.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { UserDataService } from './service/user-data.service';
import { NotifyBarComponent } from './dashboard/notify-bar/notify-bar.component';
import { NotificationService } from './service/notification.service';
import { DataPanelComponent } from './dashboard/data-panel/data-panel.component';
import { DataPanelService } from './service/data-panel.service';
import { GaugeComponent } from './dashboard/data-panel/gauge/gauge.component';
import { TrafficComponent } from './dashboard/data-panel/traffic/traffic.component';
import { TrafficService } from './service/traffic.service';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { TransactionsService } from './service/transactions.service';
import { TransactionsTableComponent } from './dashboard/transactions/transactions-table/transactions-table.component';
import { TransactionsChartComponent } from './dashboard/transactions/transactions-chart/transactions-chart.component';
import { FooterComponent } from './dashboard/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotificationComponent,
    PageNotFoundComponent,
    MenuComponent,
    NotifyBarComponent,
    DataPanelComponent,
    GaugeComponent,
    TrafficComponent,
    TransactionsComponent,
    TransactionsTableComponent,
    TransactionsChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InMemoryWebApiModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataService, { dataEncapsulation: false }
    ),
    Ng2GoogleChartsModule
  ],
  providers: [
    LoginService,
    CookieService,
    UserDataService,
    NotificationService,
    DataPanelService,
    TrafficService,
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
