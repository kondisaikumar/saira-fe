import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Username is required
      password: ['', [Validators.required]]   // Password is required
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      
      this.authService.login(loginData).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Save the token and navigate to the dashboard
          this.authService.saveToken(response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}