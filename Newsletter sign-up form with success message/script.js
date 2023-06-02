const container2 = document.querySelector('.container2')
const message = document.querySelector('.message')
const subscribe = document.querySelector('.subscribe')
const main = document.querySelector('main')
const dissmiss = document.getElementById("dissmiss")
const enteredMail = document.getElementById("enteredMail")
const input = document.querySelector('input')
const errorMsg = document.getElementById("errorMsg")
var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 subscribe.addEventListener("click", function(){
    if(input.value.match(validationEmail)){
        main.style.display = "none";
        message.style.display = "flex";
        enteredMail.textContent = input.value;
    }else{
        errorMsg.textContent = "Valid email required"
        input.style.borderColor = "red";
        input.style.color = "red";
        input.style.background = "hsl(351, 93%, 89%)"
    }
 })
 dissmiss.addEventListener("click", function(){
    message.style.display = "none";
    main.style.display = "flex";
 })
