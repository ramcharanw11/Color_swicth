const colors = document.querySelectorAll(".color");
const body = document.querySelector("body");

colors.forEach(function(color){
    color.addEventListener('click',function(e){
        if(e.target.id==="color1"){
            body.style.backgroundColor="red"
        }
        if(e.target.id==="color2"){
            body.style.backgroundColor="orange"
        }
        if(e.target.id==="color3"){
            body.style.backgroundColor="green"
        }
        if(e.target.id==="color4"){
            body.style.backgroundColor="black"
        }
    })
})