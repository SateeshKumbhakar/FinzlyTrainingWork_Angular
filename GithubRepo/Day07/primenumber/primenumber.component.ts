import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primenumber',
  templateUrl: './primenumber.component.html',
  styleUrls: ['./primenumber.component.css']
})
export class PrimenumberComponent implements OnInit {

  constructor() { }

  result="result see here";
  ngOnInit(): void {
  }
  checkPrime(nameData:any){
     nameData =+ nameData;
    if(this.isPrime(nameData)){
      this.result = `Number ${nameData} is prime `;
    }
    else{
      this.result = `Number ${nameData} is not prime `;
    }
   
  }
  isPrime(num: number): boolean {
    
    if (num <= 1) {
        return false;
    }

    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

}
