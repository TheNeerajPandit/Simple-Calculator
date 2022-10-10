const display = document.querySelector('#out');
const keys = document.querySelectorAll('#button');
let result = '';
Array.from(keys).forEach(key=>{
    key.addEventListener('click', e=>{
    
        
        buttonText=e.target.innerText;
        console.log(buttonText);

        if(buttonText=='C'){
            display.value="0";
            result='';
        }else if(buttonText=='='){
            display.value=eval(result);
            if(display.value=='NaN'){
                display.value='undefined';
            }
        }else{
            result += buttonText;
            display.value=result;
        }
    })
})