import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {logging} from "protractor";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: any;
    password: any;
  constructor(private router: Router, private signinservice: LoginService) { }

  ngOnInit(): void {
  }

  viewUser(): any {
   this.router.navigate(['userlist'])
   // console.log('11111111111111111');

  }

  signIn(): any{
    console.log(this.username);
    this.signinservice.signIn(this.username, this.password).subscribe((res: any) =>
      {
        console.log(res);
      }
    );
  }

}
