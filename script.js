let textField = document.querySelector('.text');
let decryptText = document.querySelector('.decryptText');
let encryptButton = document.querySelector('.encrypt').addEventListener('click', ()=>{
 
console.log(decryptText = textField.value.replaceAll('a','ai').replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat'))
});


let decryptButton = document.querySelector('.decrypt').addEventListener('click',()=>{
  console.log(textField.value.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u'))
}); 
