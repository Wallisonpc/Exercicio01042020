var despertar ="";

function Despertador(){
despertar=document.getElementById('Time').value;
setTimeout (function () {
    alert ("Despertando apos "+ despertar); } , despertar);
   
}