
// Calculator Example
var numText =document.getElementById('num-text')
var val1
var val2
var addition = document.getElementById('button-addition')
var subtraction = document.getElementById('button-subtraction')
var multiplication = document.getElementById('button-multiplication')
var division = document.getElementById('button-division')
var equals = document.getElementById('button-equals')
var operation
var result =document.getElementById('result')
 
addition.addEventListener('click', function (){ 
 	operation = '+'
    val1 = parseInt(numText.value)
    numText.value=''
 })

  subtraction.addEventListener('click', function (){ 
 	operation = '-'
     val1 = parseInt(numText.value)
    numText.value=''    
 })
    multiplication.addEventListener('click', function (){ 
 	operation = '*'
    val1 = parseInt(numText.value)
    numText.value=''     
 })
     division.addEventListener('click', function (){ 
 	operation = '/'
    val1 = parseInt(numText.value)
    numText.value=''     
 })
equals.addEventListener('click', function(){
	val2 = parseInt(numText.value)
	if ( operation == '+'){
	 		result.innerHTML = val1 + val2 
	 	}
	 	else if (operation == '-'){
	 		result.innerHTML = val1 - val2
	 	}
	 	else if (operation == '*'){
	 		result.innerHTML = val1 * val2
	 	}
	 	else if (operation == '/') {
	 	result.innerHTML = val1 / val2
	 }
 operation = undefined
	numText.value =''
 /*val1.value =''
 val2.value =''*/
})
