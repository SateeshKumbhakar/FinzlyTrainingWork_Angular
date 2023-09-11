// task display class data using advanced feature of TS

  
export class HomeWork{

    public name:string;
    private age :number;
    protected salary:number;

    constructor(name:string,age:number,salary:number){
    
        this.name =name;
        this.age= age;
        this.salary = salary
        
    }
      
  display (){
    console.log(`${this.name} ${this.age} ${this.salary}`);
  }

}


let homeWork = new HomeWork("Sateesh",123,12345);

homeWork.display();