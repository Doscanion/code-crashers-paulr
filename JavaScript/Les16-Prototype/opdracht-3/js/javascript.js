function Admin(username, auth){
	this.auth = auth;
    User.call(this, username)
}

function Customer(username, firstName, lastName, location){
	this.firstName = firstName;
	this.lastName = lastName;
	this.location = location;
    User.call(this, username);
}

function User(username) {
    this.username = username;
}

User.prototype.login = function login() {
    document.body.innerHTML += 'User ' + this.username + ' has logged in'+ "<br />"
} 

User.prototype.logout = function logout() {
    document.body.innerHTML += 'User ' + this.username + ' has logged out'+ "<br />"
} 
Admin.prototype = Object.create(User.prototype)
Customer.prototype = Object.create(User.prototype)

const userAdmin = new Admin('JPaul', 1)
const userCustomer = new Customer('Revgew', 'Hans', 'Aldak', 'Verweg')

console.log(userAdmin);
console.log(userCustomer);

console.log(userAdmin instanceof User, userAdmin instanceof Admin);
console.log(userCustomer instanceof User, userCustomer instanceof Customer);

userAdmin.login();
userAdmin.logout();
userCustomer.login();
userCustomer.logout();