import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'addbook', pathMatch: 'full' },
  { path: 'addbook', component: AddBookComponent },
  { path: 'books', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }