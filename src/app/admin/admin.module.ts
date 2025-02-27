import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';


@NgModule({
  declarations: [
    BookListComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
