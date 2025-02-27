import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Userdata } from '../models/userdata';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.baseApiUrl;
  userId: number = JSON.parse(localStorage.getItem('currentUser') || '{}').user.id;

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  getPlantoRead(): Observable<Userdata> {
    return this.http.get<Userdata>(this.apiUrl + '/userdata/' + this.userId);
  }

  updatePlanToRead(books: Book[]): Observable<any> {
    return this.http.patch<any>(this.apiUrl + '/userdata/' + this.userId, {"id": this.userId, "plantoread": books})
  }
}
