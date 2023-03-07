let userName = document.getElementById('userName');
let password =document.getElementById('password');
let btnLog = document.getElementById('logIn');
let title = document.querySelector('.title')
let getName = JSON.parse(localStorage.getItem('Users'));

let x = getName.name
let y = getName.password

let validlogName = document.querySelector('.validlogName')
let validlogPass = document.querySelector('.validlogPass')

btnLog.addEventListener('click',()=>{

    if(userName.value ==''  ){
        
        validlogName.style.display ='flex';
    }else if(password.value ==''){

        validlogPass.style.display ='flex'
    }
    else if(x === userName.value || y===password.value ){
        
        setTimeout(()=>{
         
            window.location= 'main.html';
            title.innerHTML=`welecome ${x}`
            
        
            },1500);
           
    }

   
})




