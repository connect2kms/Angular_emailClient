import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

import { AuthService } from '../auth.service';

import { map, catchError, of } from 'rxjs';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
        return null;
      }),
      catchError((err) => {
        //console.log(err);
        if (err.error.username) {
          return of({ nonUniqueUser: true });
        } else {
          return of({ serverError: true });
        }
      })
    );
  };
}
