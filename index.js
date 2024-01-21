var number=Math.floor(Math.random()*6+1);
var number1=Math.floor(Math.random()*6+1);

if(number==1){
    for(var c=0;c<3;c++){
    document.querySelectorAll(".circle1")[c].style.visibility="hidden";
    document.querySelectorAll(".circle2")[c].style.visibility="hidden";
document.querySelectorAll(".circle3")[c].style.visibility="hidden";
}
document.querySelector("#twoc2").style.visibility="visible";
}
else if(number==2){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle1")[c].style.visibility="hidden";
        document.querySelectorAll(".circle2")[c].style.visibility="hidden";
    document.querySelectorAll(".circle3")[c].style.visibility="hidden";
    }  
    document.querySelector("#onec1").style.visibility="visible";
    document.querySelector("#threec3").style.visibility="visible";
}
else if(number==3){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle1")[c].style.visibility="hidden";
        document.querySelectorAll(".circle2")[c].style.visibility="hidden";
    document.querySelectorAll(".circle3")[c].style.visibility="hidden";
    }document.querySelector("#onec1").style.visibility="visible";
document.querySelector("#threec3").style.visibility="visible";
document.querySelector("#twoc2").style.visibility="visible";
}
else if(number==4){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle1")[c].style.visibility="hidden";
        document.querySelectorAll(".circle2")[c].style.visibility="hidden";
    document.querySelectorAll(".circle3")[c].style.visibility="hidden";
    }document.querySelector("#onec1").style.visibility="visible";
document.querySelector("#threec3").style.visibility="visible";

document.querySelector("#onec3").style.visibility="visible";
document.querySelector("#threec1").style.visibility="visible";
    
}
else if(number==5){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle1")[c].style.visibility="hidden";
        document.querySelectorAll(".circle2")[c].style.visibility="hidden";
    document.querySelectorAll(".circle3")[c].style.visibility="hidden";
    }
    document.querySelector("#onec1").style.visibility="visible";
    document.querySelector("#threec3").style.visibility="visible";
    document.querySelector("#twoc2").style.visibility="visible";    
    document.querySelector("#onec3").style.visibility="visible";
    document.querySelector("#threec1").style.visibility="visible";
        
}
else{
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle2")[c].style.visibility="hidden";
    }
}
if(number1==1){
    for(var c=0;c<3;c++){
    document.querySelectorAll(".circle11")[c].style.visibility="hidden";
    document.querySelectorAll(".circle22")[c].style.visibility="hidden";
document.querySelectorAll(".circle33")[c].style.visibility="hidden";
}
document.querySelector("#twoc22").style.visibility="visible";
}
else if(number1==2){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle11")[c].style.visibility="hidden";
        document.querySelectorAll(".circle22")[c].style.visibility="hidden";
    document.querySelectorAll(".circle33")[c].style.visibility="hidden";
    }  
    document.querySelector("#onec11").style.visibility="visible";
    document.querySelector("#threec33").style.visibility="visible";
}
else if(number1==3){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle11")[c].style.visibility="hidden";
        document.querySelectorAll(".circle22")[c].style.visibility="hidden";
    document.querySelectorAll(".circle33")[c].style.visibility="hidden";
    }document.querySelector("#onec11").style.visibility="visible";
document.querySelector("#threec33").style.visibility="visible";
document.querySelector("#twoc22").style.visibility="visible";
}
else if(number1==4){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle11")[c].style.visibility="hidden";
        document.querySelectorAll(".circle22")[c].style.visibility="hidden";
    document.querySelectorAll(".circle33")[c].style.visibility="hidden";
    }document.querySelector("#onec11").style.visibility="visible";
document.querySelector("#threec33").style.visibility="visible";

document.querySelector("#onec33").style.visibility="visible";
document.querySelector("#threec11").style.visibility="visible";
    
}
else if(number1==5){
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle11")[c].style.visibility="hidden";
        document.querySelectorAll(".circle22")[c].style.visibility="hidden";
    document.querySelectorAll(".circle33")[c].style.visibility="hidden";
    }
    document.querySelector("#onec11").style.visibility="visible";
    document.querySelector("#threec33").style.visibility="visible";
    document.querySelector("#twoc22").style.visibility="visible";    
    document.querySelector("#onec33").style.visibility="visible";
    document.querySelector("#threec11").style.visibility="visible";
        
}
else{
    for(var c=0;c<3;c++){
        document.querySelectorAll(".circle22")[c].style.visibility="hidden";
    }
}
if(number1>number){
    document.querySelector(".Refresh").innerHTML="Player 2 WON"; 
}
else if(number1<number){
    document.querySelector(".Refresh").innerHTML="Player 1 WON"; 
}
else{

    document.querySelector(".Refresh").innerHTML="NO ONE won! DRAW"; 
}