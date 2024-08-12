const registo = document.getElementById("contenedoregistrar"); 
const btnregistrar = document.getElementById("btnregistrar"); 
const login = document.getElementById("login");
const btnlogin = document.getElementById("btnlogin"); 


btnregistrar.addEventListener("click", ()=>{
    llamaregistrar();
    llamarlogin();
}); 


btnlogin.addEventListener("click", ()=>{ 
    llamarlogin();
    llamaregistrar();
})




function llamaregistrar(){
    registo.classList.toggle("motraregistro"); 
}

function llamarlogin(){
    login.classList.toggle("ocualtarlogin"); 
}