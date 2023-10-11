import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';
import { AdminchildComponent } from './adminchild/adminchild.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminmainComponent } from './adminmain/adminmain.component';

const adminRoutes: Routes = [
  {
    path: 'adminmain',
    component: AdminmainComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', component: AdmindashComponent },
      { path: 'adminchild', component: AdminchildComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
