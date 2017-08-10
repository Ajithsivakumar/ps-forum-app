import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private http:Http) { }

  ngOnInit() {
  }
loginuser=function()
{
  const body={name:this.user,pass:this.pass}
  this.http
  .post('http://localhost:3000/send',body)
  .subscribe(data => {
          this.testResponse = data;
          console.log("I CANT SEE DATA HERE: ", this.testResponse);
          if(this.testResponse._body!="[]") this.router.navigate(['dashboard']);
        })
  
}
}
