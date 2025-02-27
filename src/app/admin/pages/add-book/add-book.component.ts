import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddbookService } from '../../services/addbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private addbookService: AddbookService, private router: Router) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      this.addbookService.addBook(bookData).subscribe((data)=> {
        this.router.navigate(['/admin/books']);
      });
    }
  }
}
