let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       if(e.target.innerHTML == '='){
        string=eval(string);
        document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML == 'C'){
        string ='';
        document.querySelector('input').value = string;
       }
       //create a single digit deletion
       else if(e.target.innerHTML == '%'){
        string=string/100;
        document.querySelector('input').value = string;
       }
       else{
       console.log(e.target)
       string=string + e.target.innerHTML;
       document.querySelector('input').value = string;
       }
    })
})