const boton = document.getElementById("botonNombre");
boton.addEventListener("click", () =>{
let nameChica = document.getElementById("nombreChica").value;
document.getElementById("aparecedorNombre").innerHTML =`<h2>${nameChica}¿Cúal es tu numero favorito?</h2>`;
})

const botonCifrado = document.getElementById("botonCifrar");
//const textDescifrar = document.getElementById("cajaDescifrado").value;

botonCifrado.addEventListener("click",() =>{
 let textCifrar= document.getElementById("cajaCifrado").value;
 const offset = document.getElementById("numeroFav").value;
  document.getElementById("aparecedorCaja1").innerHTML = `${textCifrar}  ${offset}`;
})

const botonDescifrado = document.getElementById("botonDescifrar");
botonDescifrado.addEventListener("click",() =>{
let textDescifrar = document.getElementById("cajaDescifrado").value;
const offset = document.getElementById("numeroFav").value;
console.log(textDescifrar + offset);
})



