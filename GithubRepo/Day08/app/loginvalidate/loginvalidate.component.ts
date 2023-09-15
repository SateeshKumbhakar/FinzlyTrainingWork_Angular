import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginvalidate',
  templateUrl: './loginvalidate.component.html',
  styleUrls: ['./loginvalidate.component.css']
})
export class LoginvalidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password="12345";
  name ="sateesh"
onClick(getname:any,getpassword:any){
  
  if(this.name ===getname && this.password === getpassword ){
   alert("logged is successfully")
   
  }
  else{
    alert("Enter Correct Values")
  }

}
}
