import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { CounterComponent } from './components/counter/counter/counter.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { LoggingComponent } from './components/logging/logging.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { RoutingnavComponent } from './components/routingnav/routingnav.component';
import { RoutingnavaccountComponent } from './components/routingnavaccount/routingnavaccount.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  {
    path: 'counter',
    component: CounterComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'userlist',
    component: UserlistComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'parent',
    component: ParentComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'logging',
    component: LoggingComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'templateform',
    component: TemplateformComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'reactiveform',
    component: ReactiveformComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'adminmain',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [authGuard],
    data: { animation: 'Article' },
  },

  // { path: 'login', component: LoginComponent },

  {
    path: 'routingnav',
    component: RoutingnavComponent,
    data: { animation: 'Article' },

    children: [
      {
        path: 'item/:id',
        component: RoutingnavaccountComponent,
        data: { animation: 'Article' },
      },
    ],
  },
  {
    path: 'pipes',
    component: PipesComponent,
    data: { animation: 'Article' },
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
