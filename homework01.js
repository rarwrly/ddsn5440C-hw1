
// Calculator Example
var val1 = document.getElementById('val1')
var val2 =document.getElementById('val2')
var addition = document.getElementById('button-addition')
var subtraction = document.getElementById('button-subtraction')
var multiplication = document.getElementById('button-multiplication')
var division = document.getElementById('button-division')
var result =document.getElementById('result')

 addition.addEventListener('click', function (){ 
 	result.innerHTML = parseInt(val1.value) + parseInt(val2.value)
         
 })
  subtraction.addEventListener('click', function (){ 
 	result.innerHTML = parseInt(val1.value) - parseInt(val2.value)
         
 })
    multiplication.addEventListener('click', function (){ 
 	result.innerHTML = parseInt(val1.value) * parseInt(val2.value)
         
 })
     division.addEventListener('click', function (){ 
 	result.innerHTML = parseInt(val1.value) / parseInt(val2.value)
         
 })
