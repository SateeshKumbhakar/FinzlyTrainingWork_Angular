
class MyTask {

    constructor(){
        console.log(this);
    }
    
    display(){
        console.log(this); 

    }

    // console.log(this); // error
    ele :10;

    nameFun :()=>console.log(this.) ;
    

}

let mytask =  new MyTask();
mytask.display();
// nameFun();

export {}