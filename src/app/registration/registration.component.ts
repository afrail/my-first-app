import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationService } from '../service/registration.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: any;
  email: any;
  password: any;
  name: any;
  phone: any;
  constructor(private router: Router, private registration: RegistrationService, private http: HttpClient) { }

  ngOnInit() {
  }


  signUp(): any {
    this.registration.signUp(this.name, this.email, this.phone, this.password).subscribe((res: any) => {
      console.log(res);

    });
  }



  goToLogin(): void {

    this.router.navigate(['login']);
  }
}
