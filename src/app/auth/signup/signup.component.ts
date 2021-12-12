import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    console.log(this.authForm.value);
    this.authService.signup(this.authForm.value).subscribe({
      //   (response) => {
      //   console.log(response);
      // }

      next: (response) => {
        // Navigate to other component
      },
      error: (err) => {
        // Throw error
        if (err.status === 0) {
          this.authForm.setErrors({
            networkError: true,
          });
        } else {
          this.authForm.setErrors({
            unknownError: true,
          });
        }
      },
    });
  }
}
