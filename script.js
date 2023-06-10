
const encryptButton = document.querySelector('.encrypt')
const decryptButton = document.querySelector('.decrypt')
let textResult = document.querySelector('.textResult')
let copy = document.querySelector('.copy')
let text = document.querySelector('.text')

let encriptar = () => {
  textResult.innerHTML = text.value.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5').replaceAll('1', 'ai').replaceAll('2', 'enter').replaceAll('3','imes').replaceAll('4', 'ober').replaceAll('5', 'ufat')

}
let decriptar = ()=>{

  textResult.innerHTML = text.value.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
}

encryptButton.addEventListener('mousedown', encriptar)
decryptButton.addEventListener('mousedown', decriptar)
