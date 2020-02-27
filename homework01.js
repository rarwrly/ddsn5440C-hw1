
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
var clear =document.getElementById('button-clear')
var decimal = document.getElementById('button-decimal')
 /* get numpad */

 for (var i=0; i <= 9; i++){
 	var  numbutton =document.getElementById('button-'+i)
 		numbutton.addEventListener('click', function(e){
 		numText.value= numText.value + e.target.innerHTML
 	})
 }

decimal.addEventListener('click', function(){
numText.value= numText.value + '.'

 	})

addition.addEventListener('click', function (){ 
 	operation = '+'
    val1 = parseFloat(numText.value)
    numText.value=''
 })

  subtraction.addEventListener('click', function (){ 
 	operation = '-'
     val1 = parseFloat(numText.value)
    numText.value=''    
 })
    multiplication.addEventListener('click', function (){ 
 	operation = '*'
    val1 = parseFloat(numText.value)
    numText.value=''     
 })
    division.addEventListener('click', function (){ 
 	operation = '/'
    val1 = parseFloat(numText.value)
    numText.value=''     
 })
equals.addEventListener('click', function(){
	val2 = parseFloat(numText.value)
	if ( operation == '+'){
	 		numText.value = val1 + val2 
	 	}
	 	else if (operation == '-'){
	 		numText.value = val1 - val2
	 	}
	 	else if (operation == '*'){
	 		numText.value = val1 * val2
	 	}
	 	else if (operation == '/') {
	 		numText.value = val1 / val2
	 }
 operation = undefined
 /*val1.value =''
 val2.value =''*/
})
    clear.addEventListener('click', function (){ 
    numText.value='' 
    val1 = undefined
    val2 = undefined
    operation =undefined
 })

