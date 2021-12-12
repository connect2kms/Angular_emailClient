import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupResponse {
  username: string;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootURL = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      this.rootURL + '/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.rootURL + '/auth/signup', credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<any>(this.rootURL + '/auth/signedin', {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }
}
