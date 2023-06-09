let output = [];

const letters = ["a","e","i","o","u"];
const rules = ["ai","enter","imes","ober","ufat"];
const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');
const textResult = document.querySelector('.textResult')
let copy = document.querySelector('.copy');
let text = document.querySelector('.text');


let pegarTexto = ()=>{

output = 
textResult.innerHTML = text.value.replaceAll(letters[0], rules[0]).replaceAll(letters[4], rules[4]).replaceAll(letters[3], rules[3]).replaceAll('e', 'enter');


  }
 
  console.log(output)

 encryptButton.addEventListener('mousedown', pegarTexto)
 copy.addEventListener('mousedown', ClipboardEvent )

//1 Ao clicar no botão 'encrypt';OK
//2 pegar o texto digitado do textarea;OK
//2.1 transformar o texto digitado em um novo texto a regra é: todas as letras "a","e","i","o","u" das palavras digitadas devem ser trocadas pelas palavras "ai","enter","imes","ober","ufat";
//3 Devolver texto encriptado para o campo de resposta

