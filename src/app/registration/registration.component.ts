import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: true
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService ) {
    // Initialize the form
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Call the registerUser method from the authentication service
      this.authService.registerUser(this.registrationForm.value).subscribe((response) => {
      console.log('Registration', response);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
