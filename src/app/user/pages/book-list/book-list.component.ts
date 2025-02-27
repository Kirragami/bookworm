import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  plantoread: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
    this.bookService.getPlantoRead().subscribe(userdata => {
      this.plantoread = userdata.plantoread;
    });
  }

  addToPlanToRead(book: Book) {
    this.plantoread.push(book);
    this.bookService.updatePlanToRead(this.plantoread).subscribe((data)=> {
      this.plantoread = data.plantoread;
    });
  }
}
