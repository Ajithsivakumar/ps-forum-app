import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
createpost(e)
{
  e.preventDefault();
  console.log(e);
  var author=e.target.elements[0].value;
  var title=e.target.elements[1].value;
  var message=e.target.elements[2].value;
  console.log(author,title,message);
 if(author!=""&&title!=""&&message!="")
  {
    this.router.navigate(['list']);
  }
 else
  {
    return false;
  } 
  
}
}
