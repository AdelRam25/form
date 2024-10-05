let name = document.getElementById('name')
let email= document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')
let message = document.getElementById('message');

submit.onclick = function(){
 if (name.value.length >0 && password.value.length >8 && email.value.length >0 )
   alert("You are registered. ")
  

else{
    alert("There is an error.")
}
}



