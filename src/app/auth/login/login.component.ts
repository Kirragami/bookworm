import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.email, this.password).subscribe((data) => {
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data));

        if (data.user.userType == 'admin') {
          this.router.navigate(['/admin']);
          return;
        }
        this.router.navigate(['/user'])
        return;
      });
    }
  }
}