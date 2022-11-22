var prodect=document.querySelectorAll('.row  .card1 .btn1')
var sm=document.querySelector('#sum')
var show=document.querySelector('#show')

var btn=document.querySelector('#add')
var total=0

prodect.forEach(function(x){
    x.onclick=function(){
        
       
        sm.innerHTML+=  " + " +x.getAttribute('title')
        if(sm.innerHTML!=""){
        btn.style.display="block"}
         total+= parseInt(x.getAttribute('price'))
    }}
)

btn.onclick=function(){
    show.innerHTML="السعر الاجمالي = "+ total+"$"}