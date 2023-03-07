let userName =document.getElementById('userName');
console.log(userName)
let email =document.getElementById('Email');
let password =document.getElementById('password');
let confirmPassword=document.getElementById('ConfirmPassword');
let signUpBtn =document.getElementById('signUp');

/////////////////////////////////////////////////

let inName= document.querySelector('.inName')
let inemail= document.querySelector('.inemail')
let inPass1= document.querySelector('.inPass1')
let inPass2= document.querySelector('.inPass2')



signUpBtn.addEventListener('click',signUp)

function signUp(){
let names= userName.value.trim()
let userEmail= email.value.trim()
let userPassword= password.value.trim()
let userconfirmPassword= confirmPassword.value.trim()
 
let users ={
    name:names,
    email:userEmail,
    password:userPassword,
}

let json = JSON.stringify(users)


let regex=/[^a-z3-9]/ig


let regex2=/\w+\d+@\w+.com/ig

let regex3=/^[A-Za-z0-9]\w{8,}$/;

if (!regex.test(names) || names == ""){
    inName.style.display='flex'
} 
    else if (!regex2.test(userEmail) || userEmail==""){
        inemail.style.display='flex'
    } 
    else  if(!regex3.test(userPassword) || userPassword ==""){
        inPass1.style.display='flex'
    }
    else  if (userconfirmPassword != userPassword){
        inPass2.style.display='flex'
    }
 else{

    window.localStorage.setItem('Users',json);
    setTimeout(()=>{
        window.location='login.html'
        },1500);
}

}

