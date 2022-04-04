function img(){
	document.getElementById('img').src='https://img-corp.com/images/logo@2x.png'
}
function sentence(){
	document.getElementById('sentence').innerHTML = 'this is also a sentence';
}

function showAlert() {
    var myText = "key";
    alert (myText);
  }

function sentence2(){
	document.getElementById('sentence2').style.backgroundColor = 'yellow';
	document.getElementById('sentence2').style.fontFamily = 'arial';
	document.getElementById('sentence2').style.textAlign = 'center';
}

function rtrn(f){
	return (f-32) * 5/9
}
function temp(){
	document.getElementById('cal').innerHTML = rtrn(20);
}
function sum(){
	var a =  parseFloat(prompt('number 1: '));
  var b =  parseFloat(prompt('number 2: '));
  document.getElementById('sum1').innerHTML = a+b
}
function sum2(){
	var a = prompt('first name');
	var b = prompt('last name');
	var c = "Nice to meet you ";
	document.getElementById('sum2').innerHTML = c+a+b;
}