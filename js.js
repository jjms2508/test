let test = "Prueba de commit en My rama y Push en dev";
//etiqueta
//selectores clase
//selectores id
let parrafo1 = document.querySelector("p");
//let parrafo1 = document.querySelector(".parrafo");  //clase
//let parrafo1 = document.querySelector("#parrafoRojo");  //id

console.log(parrafo1);
console.log("_______________________");

let parrafos = document.querySelectorAll(".parrafo");
//let parrafos = document.querySelectorAll(".parrafo#parrafoRojo");
console.log(parrafos);
for(let i=0; i<parrafos.length;i++){
    console.log(parrafos[i]);
}
console.log("_______________________");

let parrafo2 = document.getElementsByClassName("parrafo");
console.log(parrafo2);
for(let i=0; i<parrafo2.length;i++){
    console.log(parrafo2[i]);
}
console.log("_______________________");

//  getElementById// trae elementos por ID
let parrafoRojo = document.getElementById("parrafoRojo");
console.log(parrafoRojo);
console.log("_______________________");

let parrafos3 = document.getElementsByTagName("p");
console.log(parrafos3);
console.log("_______________________");

let propiadadesParrafo = document.querySelector("p");
console.log(propiadadesParrafo);
console.log("-----------------------");
console.log(propiadadesParrafo.textContent);
console.log(propiadadesParrafo.style);
console.log(propiadadesParrafo.attributes);
console.log(propiadadesParrafo.dataset);
console.dir(propiadadesParrafo);
console.log("_______________________");

const descripcion = document.querySelector('.descripcion');
console.log(descripcion.textContent);

//descripcion.textContent = descripcion.textContent + "🍿";

descripcion.textContent = `${descripcion.textContent} 🍿`;


console.log("_______________________");

const imagen = document.querySelector('.nice');
//ver lista clases → elemento
console.log(imagen.classList);
//argrega clase desde CSS
imagen.classList.add("circle");
//imagen.classList.remove("nice");  //remueve la clase a la imagen en la constante!
//imagen.classList.remove("circle");

console.log("_______________________");

let objPersona = {
    name : "Erika",
    isLoged : false,
    moneyAccount : 250
};
console.log(objPersona.name);
console.log(objPersona.isLoged);
console.log(objPersona.moneyAccount);

parrafoRojo.innerHTML = "cambiando parrafo uno";


descripcion.innerHTML = "Mensaje predeterminado!";