let box = document.querySelector('#select-box');


box.addEventListener('change', function(){
    console.log('start');
    let auth = 'auth';
    let firstName = 'first-name';
    let lastName = 'last-name';
    let location = 'location';
    if(this.value == 'admin'){
        createFormInput(auth, 'Authenticatieniveau', 'Authenticatieniveau', 'number', 'authenticatieniveau', 'authenticatieniveau');
        
        deleteInput(firstName);
        deleteInput(lastName);
        deleteInput(location);
        console.log('admin');
    }
    else{
        createFormInput(firstName, 'Voornaam', 'Voornaam', 'text', 'voornaam', 'voornaam');
        createFormInput(lastName, 'Achternaam', 'Achternaam', 'text', 'achternaam', 'achternaam');
        createFormInput(location, 'Locatie', 'Locatie', 'text', 'locatie', 'locatie');
        
        deleteInput(auth);
        console.log('user');
    }
})

function createFormInput(id, labelFor, labelText, inputType, inputId, inputName) {
    let div = document.createElement("div");
    let label = document.createElement("LABEL");
    let input = document.createElement("INPUT");

    div.setAttribute('class','form-row');
    div.setAttribute('id', id);

    label.setAttribute('for', labelFor);
    label.appendChild(document.createTextNode(labelText));

    input.setAttribute('type', inputType);
    input.setAttribute('id', inputId);
    input.setAttribute('type', inputName);

    div.appendChild(label);
    div.appendChild(input);

    document.querySelector('#form').appendChild(div);
}

function deleteInput (id) {
    document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}


// if (document.querySelector('username-table')) {
//     console.log('bestaat')
//     if (document.querySelector('username-table').value == document.querySelector('#gebruikersnaam').value) {
//         alert('Gebruikersnaam moet unique zijn')
//     } else{
        
//     }
// } 

document.querySelector('#button').addEventListener('click', function(){
    let user = document.querySelector('#gebruikersnaam').value;
    if (document.getElementById(user)) {
        alert('De naam moet unique zijn')
    }else{
        if(box.value == 'admin'){
            let auth = document.querySelector('#authenticatieniveau').value;
            console.log(user + auth)
            Admin.prototype = Object.create(User.prototype)
            let newAdmin =  new Admin(user, auth);
            
    
            let newRow = document.querySelector('#admin-table').insertRow(-1);
            let userCell = newRow.insertCell(0);
            let authCell = newRow.insertCell(1);
            let userText = document.createTextNode(user);
            let authText = document.createTextNode(auth);
    
            userCell.setAttribute('id', user)
            userCell.appendChild(userText);
            authCell.appendChild(authText);
            console.log(newAdmin);
        } else{
            let firstName = document.querySelector('#voornaam').value;
            let lastName = document.querySelector('#achternaam').value;
            let location = document.querySelector('#locatie').value;
            let newCustomer = new Customer(user, firstName, lastName, location);
            
            let newRow = document.querySelector('#user-table').insertRow(-1);
            let userCell = newRow.insertCell(0);
            let firstNameCell = newRow.insertCell(1);
            let lastNameCell = newRow.insertCell(2);
            let locationCell = newRow.insertCell(3);
            let userText = document.createTextNode(user);
            let firstNameText = document.createTextNode(firstName);
            let lastNameText = document.createTextNode(lastName);
            let locationText = document.createTextNode(location);
            
            userCell.setAttribute('id', user)
            userCell.appendChild(userText);
            firstNameCell.appendChild(firstNameText);
            lastNameCell.appendChild(lastNameText);
            locationCell.appendChild(locationText);
            console.log(newCustomer);
        }
    } 
})




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


Admin.prototype = Object.create(User.prototype)
Customer.prototype = Object.create(User.prototype)

// const userAdmin = new Admin('JPaul', 1)
// const userCustomer = new Customer('Revgew', 'Hans', 'Aldak', 'Verweg')

// console.log(userAdmin);
// console.log(userCustomer);

// console.log(userAdmin instanceof User, userAdmin instanceof Admin);
// console.log(userCustomer instanceof User, userCustomer instanceof Customer);


