import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  public apiUrl = environment.baseUrl;
  public registration = this.apiUrl + 'api/auth/';
  public userlist = this.apiUrl + 'user/view';
  constructor() { }
}
