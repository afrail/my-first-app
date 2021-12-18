import { Injectable } from '@angular/core';
import {ApiUrlService} from './api-url.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private url: ApiUrlService, private http: HttpClient) { }

  signIn(userName: string, password: string): any{
    const url = this.url.registration;
    const data = {
      username: userName,
      password: password
    };
    return this.http.post(url + 'signin', data).pipe(map((res: any) => {
      return res;
    }
  ));
}

}
