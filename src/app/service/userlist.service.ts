import { Injectable } from '@angular/core';
import{HttpHeaders,HttpClient} from '@angular/common/http'
import { ApiUrlService } from './api-url.service';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: HttpClient,private url:ApiUrlService) { }



  getAllUser(): any {
    console.log('ddddddddddddddddddddd');
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.userlist;
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      console.log('ddddddd=' + res)
      return res;
    }));
  }


}
