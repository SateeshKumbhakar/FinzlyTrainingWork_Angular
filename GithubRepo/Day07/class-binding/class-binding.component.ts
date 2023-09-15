import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textColor=false
  isClicked=false;

  onClick(changeStyle:any){
    if(!this.isClicked){
      this.isClicked =true;
      this.textColor=true;
    }
    else{
      this.textColor=false;
      this.isClicked=false;
    }
    // console.log(changeStyle);
    

  }
}
