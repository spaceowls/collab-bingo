const button = document.getElementById('btn')

button.addEventListener('click', (event) => {
  event.preventDefault()

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirm_password = document.getElementById('confirm_password');

  if(email.value == '') {
    email.classList.add('erro')
  } 

  else {
    email.classList.remove('erro')
  }

  if(password.value == '') {  
    password.classList.add('erro')
  }

  else {
    password.classList.remove('erro')
  }

  if(confirm_password.value == '') {
    confirm_password.classList.add('erro')
  }

  else {
    confirm_password.classList.remove('erro')
  }

  if(email.value.indexOf("@") == -1  || email.value.indexOf(".com") == -1 || (email.value.indexOf(".com") - email.value.indexOf("@") == 1)) {
    email.classList.add('erro')
  } 

  else {
    email.classList.remove('erro')
  }

  if(!isNaN(email.value) == true && email.value.length == 11) {
    email.classList.remove('erro')
  }

  if(password.value.length <= 6) {
    password.classList.add('erro')
  }

  else {
    password.classList.remove('erro')
  }
  
  if(confirm_password.value != password.value) {
    confirm_password.classList.add('erro')
  }

  else {
    confirm_password.classList.remove('erro')
  }
})