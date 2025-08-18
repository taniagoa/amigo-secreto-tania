
let arrayAmigos=[];
let listaSorteados=[];

function agregarAmigo(){

 var nombreAmigo = document.getElementById("amigo").value;
 if(nombreAmigo!==""){
    arrayAmigos.push(nombreAmigo); 
      
    limpiarCaja();
    crearLista();
    return;
 
 }else{
    alert('ingrese un nombre valido');
 };
    
};
function limpiarCaja(){
    return document.querySelector('#amigo').value='';
};

function crearLista(){
document.querySelector('#listaAmigos').innerHTML='';
console.log(arrayAmigos.length)

for (var contador=0; contador<arrayAmigos.length; contador++) {
   escribirLista('listaAmigos',arrayAmigos,contador);  
};
};
function escribirLista(id,array,numero){
   let li = document.createElement('li');
   li.textContent=array[numero];
   document.getElementById(id).appendChild(li);
   console.log(li.textContent);
};

function sortearAmigo(){
   if(arrayAmigos.length>=3){
   
   let numeroNuevo= Math.floor(Math.random()*10);
   console.log(numeroNuevo);
   if(numeroNuevo<=arrayAmigos.length){
      //escribirLista('resultado',arrayAmigos,numeroNuevo);
      
     if(listaSorteados.includes(numeroNuevo)){
      sortearAmigo();
     } else{
       escribirLista('resultado',arrayAmigos,numeroNuevo);
      listaSorteados.push(numeroNuevo);
     };
}else{
   if(listaSorteados.length>=arrayAmigos.length){
      
      document.getElementById('sortear').disabled=true;
      document.querySelector('h2').innerHTML="ya sorteaste todos los nombres";
   }else{
      sortearAmigo();
   }
 
};
}else{
   alert('ingrese al menos tres nombres');
};
};
function reiniciarJuego(){
   arrayAmigos.length=0;
   listaSorteados.length=0;
   document.querySelector('#listaAmigos').innerHTML='';
   document.querySelector('#resultado').innerHTML='';
   document.getElementById('sortear').disabled=false;
   document.querySelector('h2').innerHTML="Digite el nombre de sus amigos";
};