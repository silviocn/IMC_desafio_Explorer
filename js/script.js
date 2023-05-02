import { AlertError } from './alert-error.js'
import { Modal } from './modal.js'
// outra forma de fazer o AlertError é: import { AlertError } from "./alert-error.js"
// ele será usado dentro do form.onsubmit

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('.alert-error')

// Desafio: após dar erro, quando começar a digitar, esconder a mensagem de erro:
inputHeight.oninput = () => alertError.classList.remove('close')
inputWeight.oninput = () => alertError.classList.remove('close')

form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError) {
    alertError.classList.add('close')
    return;
  } else {
    alertError.classList.remove('close')
  }


  /* if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close() */

  const result = IMC(weight, height)
  const message = `O seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notANumber(value) {
  return isNaN(value) || value == ""
}

function IMC(weight, height) {
  return (weight / ((height/100)**2)).toFixed(2)
}