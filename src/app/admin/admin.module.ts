import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminchildComponent } from './adminchild/adminchild.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminmainComponent } from './adminmain/adminmain.component';

@NgModule({
  declarations: [AdminmainComponent, AdminchildComponent, AdmindashComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
