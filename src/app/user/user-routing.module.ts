import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { PlanToReadComponent } from './pages/plan-to-read/plan-to-read.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'plantoread', component: PlanToReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
