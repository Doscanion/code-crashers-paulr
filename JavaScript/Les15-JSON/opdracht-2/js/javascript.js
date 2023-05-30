const config = {
  method: 'GET',
  mode: 'same-origin',
  cache: 'no-store',
};

document.querySelector("button").addEventListener("click", function () {
    console.log('test')
    fetch("info.json", config)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    persons(data)
  });
})

function persons (info){
  console.log(info.users)
  info.users.forEach(element => {
    console.log(element.firstName)
    let newContent = document.createElement('article');
    let user = document.createAttribute('id');
    let first = document.createElement('p');
    let last = document.createElement('p');
    let tel = document.createElement('p');
    let mail = document.createElement('p');

    let firstText = document.createTextNode(element.firstName);
    let lastText = document.createTextNode(element.lastName);
    let telText = document.createTextNode(element.phoneNumber);
    let mailText = document.createTextNode(element.emailAddress);

    user.value = element.userId;
    first.appendChild(firstText);
    last.appendChild(lastText);
    tel.appendChild(telText);
    mail.appendChild(mailText);
    newContent.setAttributeNode(user)
    newContent.append(first, last, tel, mail);
    document.querySelector('#container').appendChild(newContent)});
}

