import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  myname="";
  ngOnInit(): void {
  }

  onClickSendData(nameData:any){
    console.log("myName is clicked");
     this.myname = nameData;
  }
}
