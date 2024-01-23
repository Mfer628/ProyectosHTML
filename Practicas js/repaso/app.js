//alert("Hola Bienvenido");
let nombre="Maria";
let apellidos="Flores"
console.log("Nombre");

//alert("El nombre es:"+nombre);
//Constantes
//Diferencia entre const y let 


let info=document.querySelector("#Informacion");
//Tener cuidado con esta parte debemos de poner diagonales invertidas `` alt gr + el btn abajo de borrar
info.innerHTML = `
   <h2>Hola Mundo</h2> 
   <h3>Mi nombre es: ${nombre} <br> Los apellidos son:  ${apellidos}</h3>
`;
