const obj1={
    name: "Rahul"
   
}

 const printName = function(age){
        console.log(this.name+" "+age )
    } 
const obj2={
    name: "vivek"
}

printName.call(obj1, 22)
printName.apply(obj2,[39])

const myName= printName.bind(obj2,39)
myName()
