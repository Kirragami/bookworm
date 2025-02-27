import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseapiUrl = environment.baseApiUrl;

  private loginAnnouncementSource = new Subject<string>();
  private logoutAnnouncementSource = new Subject<string>();

  loginAnnouncement$ = this.loginAnnouncementSource.asObservable();
  logoutAnnouncement$ = this.logoutAnnouncementSource.asObservable();

  announceLogin() {
    this.loginAnnouncementSource.next('');
  }    

  announceLogout(){
    this.logoutAnnouncementSource.next('');
  }

  login(email: string, password: string): Observable<any> {
    const apiUrl = this.baseapiUrl + '/login';
    this.announceLogin();
    return this.http.post<any>(apiUrl, { email, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    this.announceLogout();
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User {
    const user: User = JSON.parse(localStorage.getItem("currentUser") || '{}').user;
    return user;
  }

  signup(user: {email: string, username: string, password: string, userType: string}): Observable<any> {
    const apiUrl = this.baseapiUrl + '/register';
    return this.http.post<any>(apiUrl, user);
  }

  generateUserdata(userId: number) {
    const apiUrl = this.baseapiUrl + '/userdata';
    return this.http.post<any>(apiUrl, {"id": userId, "plantoread": []})
  }

  isAdmin(): boolean {
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}').user;
    console.log(currentUser);
    return currentUser.userType == 'admin';
  }
}
