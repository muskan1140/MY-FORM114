let input= document.getElementById('username')
let error1=document.getElementById('error1');

input.onblur=function(){
    input.style.borderColor="red"
    if(input.value==""){
        error1.innerHTML="Please Enter First Name"

    }
}
input.onfocus=function(){

    error1.innerHTML="";
}

let input1=document.getElementById('surname')
let error2=document.getElementById('error2');

input1.onblur=function(){
    input1.style.borderColor="red"
    if(input.value==""){
        error2.innerHTML="Please Enter last Name"
        
    }
}
input1.onfocus=function(){

    error2.innerHTML="";
}

let input2= document.getElementById('email_id')
let error3=document.getElementById('error3');

input2.onblur=function(){
    input2.style.borderColor="red"

    if(!input2.value.includes("@")){
        input2.classList.add("invalid")
        error3.innerHTML="Please Enter Valid Email-Id"
    }
    else{
        error3.innerHTML=""
    }
}
input2.onfocus=function(){
    if(this.classList.contains('invalid')){}
     //remove the class
    error3.innerHTML="";
}

let input3=document.getElementById('mobile')
let error4=document.getElementById('error4');

input3.onblur=function(){
    input3.style.borderColor="red"

    if(input3.value ==""|| Mobile.value.length !=10){
        input3.classList.add("invalid")
        error4.innerHTML="Please Enter Correct Mobile Number"
    }
    else{
        error4.innerHTML=""
    }
}
input3.onfocus=function(){
    if(this.classList.contains('invalid')){
        error4.innerHTML="";
    }
}


