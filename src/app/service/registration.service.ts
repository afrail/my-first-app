import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrlService } from './api-url.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private url: ApiUrlService, private http: HttpClient) { }

  signUp(name: any, email: any, phone: any, password: any):any {

    const url = this.url.registration;
    const data = {
      username: name,
      email: email,
      phone: phone,
      password: password
    };

    return this.http.post(url+'signup', data).pipe(map((res: any) => {
      return res;
    }));
  }
}
