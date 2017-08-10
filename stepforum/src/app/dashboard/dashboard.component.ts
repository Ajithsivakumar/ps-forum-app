import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private http:Http) { }

  ngOnInit() {
  }
insert=function(){
  const body = {author:this.author,title:this.title,message:this.message};
  this.http
  .post('http://localhost:3000/insert',body)
  .subscribe(data => {
          this.testResponse = data;
          console.log("I : ", this.testResponse);
          if(this.testResponse) this.router.navigate(['list']);
        })
}
}

