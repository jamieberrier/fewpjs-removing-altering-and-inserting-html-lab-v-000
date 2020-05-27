// Write your code here!
main.remove();

let newHeader =  document.createElement('h1');
newHeader.id = 'victory';

document.body.appendChild(newHeader);

header = document.querySelector("h1#victory");
header.innerHTML = 'Jamie is the champion';
