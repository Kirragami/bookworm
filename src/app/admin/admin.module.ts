import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { CoreModule } from '../core/core.module'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BookListComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
