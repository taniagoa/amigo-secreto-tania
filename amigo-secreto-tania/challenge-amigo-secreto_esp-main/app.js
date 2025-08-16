
let arrayAmigos=[];

function agregarAmigo(){

 var nombreAmigo = document.getElementById("amigo").value;
 if(nombreAmigo!==""){
    arrayAmigos.push(nombreAmigo); 
      
    limpiarCaja();
    crearLista();
    //alert(listaAmigos);
    //console.log(arrayAmigos);
    return;
 
 }else{
    alert('ingrese un nombre valido');
 };
 
    
};
function limpiarCaja(){
    return document.querySelector('#amigo').value='';
};
function asignarElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
};

function crearLista(){
document.querySelector('#listaAmigos').innerHTML='';
console.log(arrayAmigos.length)

for (var contador=0; contador<arrayAmigos.length; contador++) {
   let li = document.createElement('li');

   li.textContent=arrayAmigos[contador]
   document.querySelector('#listaAmigos').appendChild(li);
  console.log(arrayAmigos[contador]);

};
};

function sortearAmigo(){};