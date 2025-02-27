import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BookCardComponent,
    NavbarComponent,
  ],
  exports: [
    BookCardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
