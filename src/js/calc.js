let a=''; //firs number
let b=''; //second number
let sign=''; // знак операции
let finish=false;

const digit=['0', '1', '2', '3', '4','5', '6', '7', '8', '9', '.'];
const action=['-', '+','x','/'];


//поле
const out=document.querySelector('.calc__screen p')

//очистка
function clearALL(){
	a='';
	b='';
	sign='';
	finish=false;
	out.textContent=0;
}


  var pTag = document.querySelector('p');
  pTag.addEventListener('input', function() {
    if (this.innerText.length > 50) {
      this.innerText = this.innerText.substr(0, 7);
    }
  });


document.querySelectorAll('button').forEach(button => {
	button.onclick = (event) => {
	const key = event.target.textContent;
	if(key ==='ac'){
		clearALL();
		return; //не работает
	  }
	  
	  out.textContents='';
	  //получаю нажатую кнопку
	  
	  //если нажата кнопка от 0 до 9 или .
	  if(digit.includes(key)){
		if(b ==='' && sign ===''){
			a+=key;
			out.textContent=a;
		}
		else if(a !== '' && b !== '' && finish){
			b=key;
			finish=false;
			out.textContent=b;
		}
		else {
			b+=key;
			out.textContent=b;
		}
		return;
		
	  }
	  //если нажато клавиша действия
	  if(action.includes(key)){
		sign=key;
		out.textContent=sign;
		return;
	  }

	// если нажато равно 
	if( key === '='){
		if(b === ''){
			b=a;
		}
		switch(sign){
			case "+":
				a=(+a)+(+b);
				break;
			case "-":
				a=a-b;
				break;
			case "x":
				a=a*b;
				break;
			case "/":
				if(b === '0'){
					out.textContent="Ошибка"
					a='';
					b='';
					sign='';
					return;
				}
				a=a/b;
				break;
		}
		finish=true;
		out.textContent=a;
	}

	//если нажат процент( вроде работает без багов)
	if(key === '%'){
		if( a!== '' && b == ''){
			a=a/100;
			out.textContent=a;
		}
		if( a !== '' && b!== ''){
			b=b/100;
			out.textContent=b;
			}
		if( a !== '' && b!== '' && finish ){
			a=a/100;
			out.textContent=a;
			}
		}
	if(key === '+/-'){
		if( a!== '' && b== ''){
			a=-a;
			out.textContent=a;
		}
		if( a !== '' && b!== ''){
			b=-b;
			out.textContent=b;
			}
	}

	
}
}); 