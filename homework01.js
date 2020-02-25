
// Calculator Example
var val1 = document.getElementById('val1')
var val2 =document.getElementById('val2')
var addition = document.getElementById('button-addition')
var subtraction = document.getElementById('button-subtraction')
var multiplication = document.getElementById('button-multiplication')
var division = document.getElementById('button-division')
var equals = document.getElementById('button-equals')
var operation
var result =document.getElementById('result')

addition.addEventListener('click', function (){ 
 	operation = '+'
         
 })

  subtraction.addEventListener('click', function (){ 
 	operation = '-'
         
 })
    multiplication.addEventListener('click', function (){ 
 	operation = '*'
         
 })
     division.addEventListener('click', function (){ 
 	operation = '/'
         
 })
equals.addEventListener('click', function(){

	if ( operation == '+'){
	 		result.innerHTML = parseInt(val1.value) + parseInt(val2.value) 
	 	}
	 	else if (operation == '-'){
	 		result.innerHTML = parseInt(val1.value) - parseInt(val2.value) 
	 	}
	 	else if (operation == '*'){
	 		result.innerHTML = parseInt(val1.value) * parseInt(val2.value)
	 	}
	 	else  {
	 	result.innerHTML = parseInt(val1.value) / parseInt(val2.value)
	 }
 operation = undefined

 val1.value =''
 val2.value =''
})
