import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { CounterComponent } from './components/counter/counter/counter.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { LoggingComponent } from './components/logging/logging.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { RoutingnavComponent } from './components/routingnav/routingnav.component';
import { RoutingnavaccountComponent } from './components/routingnavaccount/routingnavaccount.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectivesComponent,
    UserlistComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    LoggingComponent,
    TemplateformComponent,
    TemplateformComponent,
    ReactiveformComponent,
    RxjsComponent,
    RoutingnavComponent,
    RoutingnavaccountComponent,
    PagenotfoundComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
