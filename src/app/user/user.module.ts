import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { PlanToReadComponent } from './pages/plan-to-read/plan-to-read.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BookListComponent,
    PlanToReadComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    CoreModule
  ]
})
export class UserModule { }
