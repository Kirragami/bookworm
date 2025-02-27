import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BookService } from 'src/app/core/services/book.service';
import { Userdata } from 'src/app/core/models/userdata';

@Component({
  selector: 'app-plan-to-read',
  templateUrl: './plan-to-read.component.html',
  styleUrls: ['./plan-to-read.component.scss']
})
export class PlanToReadComponent implements OnInit {

  books: Book[] = [];
  userId: number = JSON.parse(localStorage.getItem('currentUser') || '{}').user.id;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getPlantoRead().subscribe(userdata => {
      this.books = userdata.plantoread;
    });
  }

  removeFromPlanToRead(index: number) {
    this.books.splice(index, 1);
    this.bookService.updatePlanToRead(this.books).subscribe((data) => {
      this.books = data.plantoread;
    })
  }

}
