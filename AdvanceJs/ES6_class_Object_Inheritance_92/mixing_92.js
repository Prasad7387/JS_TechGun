let usefullMethod={
    sayHi(){
        console.log("hiiiii");
        
    },
    sayBye(){
        console.log("byee");
        
    }
}

class user{
    constructor(){
        this.name="prasad"

    }
    
}

class admin extends user{

}

// Object.assign(user.prototype,usefullMethod)


// let usr1=new user()

Object.assign(admin.prototype,usefullMethod)
let admin1=new admin()
console.log(admin1.sayBye());
console.log(admin1.sayHi());


// console.log(usr1.sayHi());
