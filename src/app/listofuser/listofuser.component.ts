import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiUrlService} from 'src/app/service/api-url.service';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';
import { UserlistService } from '../service/userlist.service';


@Component({
  selector: 'app-listofuser',
  templateUrl: './listofuser.component.html',
  styleUrls: ['./listofuser.component.css']
})
export class ListofuserComponent implements OnInit {

  projectList?: Array<any>;

  constructor(private http:HttpClient,private url: ApiUrlService, private userList: UserlistService) { }

  ngOnInit(): void {
    this.getAllProject()
  }
  
  getAllProject(): any {
    this.userList.getAllUser().subscribe((res: any) => {
      console.log("Testing = " + res);
      this.projectList = res;
      console.log(this.projectList)
    });
  }


}
