import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
loginuser(e)
{
  e.preventDefault();
  console.log(e);
  var name=e.target.elements[0].value;
  var pass=e.target.elements[1].value;
  if(name=="admin"&&pass=="admin")
    {
      this.router.navigate(['dashboard']);
    }
}
}
