const boton = document.getElementById("botonNombre");
boton.addEventListener("click", () =>{
let nameChica = document.getElementById("nombreChica").value;
document.getElementById("aparecedorNombre").innerHTML =`<h2>${nameChica}¿Cúal es tu numero favorito?</h2>`;
})

const botonCifrado = document.getElementById("botonCifrar");


botonCifrado.addEventListener("click",() =>{
 let textCifrar= document.getElementById("cajaCifrado").value;
 const offset = document.getElementById("numeroFav").value;
let result =document.getElementById("aparecedorCaja1").innerHTML = window.cipher.encode(offset,textCifrar);
})

const botonDescifrado = document.getElementById("botonDescifrar");

botonDescifrado.addEventListener("click",() =>{
let textDescifrar = document.getElementById("cajaDescifrado").value;
const offset = document.getElementById("numeroFav").value;
let result =document.getElementById("aparecedorCaja2").innerHTML = window.cipher.decode(offset,textDescifrar);

})



