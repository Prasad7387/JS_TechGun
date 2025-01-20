// ============ Normal way =============
// function Person(first,last,a){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=a;

//     this.fullName=function(){
//         console.log(this.firstName+" "+this.lastName);
        
//     }

// }

// let person1=new Person("prasad" ,"lonkar",26)
// let person2=new Person("pranali","lbhandare",25)



// console.log(person1);
// console.log(person2);




// == connect method to prototype ======= 

// function Person(first,last,a){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=a;

//     Person.prototype.fullName = function (){
//         console.log(this.firstName+" "+this.lastName);
        

//     }
// }
// let person1 =new Person("prasad " ,"lonkar",26)
// let person2= new Person("pranali" ,"bhandare",25)

// console.log(person1.fullName());
// console.log(person2.fullName());



// ===== inheritance ================ 

function Creature(ls){
    this.lifeSpan=ls;
}

Creature.prototype.breath=function(){
    console.log("breathing");
    
}
let creature1=new Creature(100)
console.log(creature1);

function Person(first,last,a){
    this.firstName=first;
    this.lastName=last;
    this.age=a;

    Person.prototype.fullName = function(){
        console.log(this.firstName+ " " +this.lastName);
        
    }

}

Person.prototype.__proto__=Object.create(Creature.prototype)

let person1= new Person ("prasad" ,"Lonkar",27) 
let person2= new Person ("pranali" ,"surse",27) 

console.log(person1);
console.log(person2.breath());

