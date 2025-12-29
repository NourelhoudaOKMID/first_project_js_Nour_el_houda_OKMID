// projet  in js 

let specialChar = ["@", "#", "-", "+", "*", "/"];
// check if password contains special char 
function specialchars(str) {
    return specialChar.some(char => str.includes(char));
}



// class 
class User {
    static users = []
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
        this.balance = 0
        this.history = []
    }
    // to storage
    static addUser(user) {
        User.users.push(user)
    }
    // find user by email 
    static findbyemail(email) {
        return User.users.find(u => u.email === email)

    }
}


// the sign up 

function signUp() {
    alert("Sign Up ")

    let name = prompt("Enter your name :")
    if (!name) {
        alert("please , name is required")
        return;
    }
    let email = prompt("Enter your email : ")
    if (!email) {
        alert("Email is required");
        return;
    }
    email = email.toLowerCase().trim();
    if (User.findbyemail(email)) {
        alert("this email already exists");
        return
    }
    let password = prompt("Create password ")
    if (!password) {
        alert("Password is required ");
        return;
    }
    if (password.length < 7) {
        alert("password must be at least 7 characters")
        return
    }
    if (!specialchars(password)) {
        alert("Password must contain one special character " + specialChar)
    }

    let confirm = prompt("Confirm password:");
    if (confirm !== password) {
        alert("Passwords do not match");
        return;
    }

    let newUser = new User(name.trim(), email, password);
    User.addUser(newUser);

    alert("Account created successfully");
    console.log("ALL USERS:", User.users);
}
//login 
function login() {

    let email = prompt("Enter email:");
    if (!email || !email.trim()) {
        alert("Email is required");
        return;
    }

    email = email.toLowerCase().trim();

    let user = User.findbyemail(email);

    if (!user) {
        alert("User not found");
        return;
    }

    let password = prompt("Enter password:");
    if (!password) {
        alert("Password is required");
        return;
    }

    if (password !== user.password) {
        alert("Wrong password");
        return;
    }

    alert("Welcome " + user.name);
    dashboard(user);
}

// change password 

function changePassword(user) {
    let oldPassword =prompt("enter  old password : ")
    if (oldPassword !== user.password){
        alert("invalid password")
        return ; 
    }
    let newPass = prompt("ENter your new password")
    if (newPass.length <7 || !specialchars(newPass)){
        alert(" let your password get strong by  using   specialcharacters like \n  @ , # , - , + , * , /  ")
        return;
    }
    let confirm = prompt("confirm new password : ")
    if (confirm !== newPass) {
        alert("Passwords de not match ")
        return;
    }
    user.password = newPass;
    alert("Password changed successfully");
}

// withdraw fuction 
function withdraw(user){
    let amout = Number(prompt ("Enter amout to withdraw "))
    if (isNaN(amout) ||  amout <=0){
        alert("INVALID amount ")
        return
    }
    if (amout > user.balance){
        alert("invald enough balance ")
        return
    }
    user.balance -= amout 
    alert ("withdraw  successful")
}