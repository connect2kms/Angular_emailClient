import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

import { map, catchError, of } from 'rxjs';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.http
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
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
