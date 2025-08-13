
let listaAmigos=[];

function agregarAmigo(){

 var nombreAmigo = document.getElementById("amigo").value;
 if(nombreAmigo!==""){
    listaAmigos.push(nombreAmigo);   
    limpiarCaja();
    //alert(listaAmigos);
    console.log(listaAmigos);
    return listaAmigos;
 }else{
    alert('ingrese un nombre valido');
 };
  
    
};

function limpiarCaja(){
    return document.querySelector('#amigo').value='';
};

