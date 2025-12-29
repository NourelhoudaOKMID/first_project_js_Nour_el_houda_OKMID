// projet  in js 

let specialChar = ["@", "#", "-", "+", "*", "/"];
// check if password contains special char 
function specialchars(str){
  return specialChar.some(char => str.includes(char));
}



// class 
class User {
    static users =[] 
    constructor (name , email , password ){
        this.name = name 
        this.email = email 
        this.password = password
        this.balance = 0 
        this.history = []
    }
    // to storage
    static addUser(user){
        User.users.push(user)
    }
    // find user by email 
    static findbyemail(email){
        return User.users.find(u => u.email === email)
    
}


    

    }



