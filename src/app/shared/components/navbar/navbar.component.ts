import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  
  constructor(private authService: AuthService, private router: Router) {
    this.subscription = authService.loginAnnouncement$.subscribe(currentUser => {
      this.isLoggedIn = true;
    });
    this.subscription = authService.logoutAnnouncement$.subscribe(empty => {
      this.isLoggedIn = false;
    });
  }

  isLoggedIn: boolean = false;
  isAdmin : boolean = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
    this.ngOnInit();
  }

}
