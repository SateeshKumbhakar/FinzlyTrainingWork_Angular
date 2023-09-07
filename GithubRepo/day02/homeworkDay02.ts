
let getData = function(name:string, age :number,role:string):string{
   console.log("with parameter  with return type ");
    return name + " "+ age+" "+ role;
}
console.log(getData("Sateesh",21,"developer"));


let getData1 = function(name:string, age :number,role:string){
    console.log("with parameter  without return type ");
    console.log(name,age, role);
}

getData1("Sateesh",21,"developer" );


let getData2 = function():string{
   
    return "without parameter but with return type getData2";
}

console.log(getData2());



let getData3 = ()=>{

    return "lamda without parameter but with return type getData2";
}

console.log(getData3());

let getData4= ():string=>{

    return "lamda  without parameter and return type  getData 4";
}

console.log(getData4());



let getData5= (name: string):string=>{

    return "lambda  with parameter and without retur type getData5" + name;
}

console.log(getData5("Sateesgh is passed as the parameter"));


export{}