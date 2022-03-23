let userName = prompt('qual è il tuo nome?');
console.log(userName);

let userSurName = prompt('qual è il tuo cognome?');
console.log(userSurName);

let userColour = prompt('qual è il tuo colore preferito?');
console.log(userColour);

const numberEnd = 21;

let password = userName + userSurName + userColour + numberEnd

document.getElementById('password').innerHTML += ' '+ password;

console.log(password);