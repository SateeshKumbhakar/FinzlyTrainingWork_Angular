/*
  single level
  multilevel
  access function in different package


*/


 export class Employee {
  id :number;
  name:string;

  constructor(id:number,name:string){
    this.id = id;
    this.name= name
  }

  showData(){
    console.log(`
         Employee Data :: ${this.id}...> ${this.name}
    `)
  }

}



