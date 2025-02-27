import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const {email, username, password} = this.registerForm.value;
    const userType = "user";
    this.authService.signup({email, username, password, userType}).subscribe((data) => {
      this.authService.generateUserdata(data.user.id).subscribe((data) => {
        this.router.navigate(['/auth/login']);
      })
    });
  }

}
