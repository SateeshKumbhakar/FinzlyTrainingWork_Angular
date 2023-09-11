import { Employee } from "./task1";

 export class Manager extends Employee { 
    mid:number;
    category:string;
 
    constructor(id:number,name:string ,mid:number,category:string){
    super(id,name);
    this.mid =mid;
    this.category = category;

 }

displayManagerData(){
   this.showData();
   super.showData();
   
   console.log(`
         Manager Details ::
         ${this.category},${this.mid}                     
     `);
    }

}