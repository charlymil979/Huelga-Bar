let datos = {};
const url =
  "https://github.com/charlymil979/charlymil979.github.io/blob/master/JSON/huelgaDb.json";

const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  art;

function llamarDb(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {

      // console.log(data);

      // Empezando a armar la estructura de datos
      for (const key in data) {
        const seccion = document.createElement("section");
        seccion.classList.add("seccion1");
        const titulo=document.createElement("h3")
        titulo.classList.add("seccion")
        titulo.innerHTML=`${key} HUELGA`;
        // console.log(key);
        if (key != "id") {
          
          for (const articulo in data[key]) {
            let $tipos = "";
            datos = data[key][articulo];
            // console.log(datos);
            
            $precio = "";

           //Armando el arreglo 
            datos[2].forEach((element,i) => {
              if(datos[0].includes("INGREDIENTES")){
                $tipos += `
                <span class="tipo">${element[0]} - </span>
                `;
                if(i>0 && i%3===0){
                  $tipos += `<br>`
                }
              }
                
                else{
              $tipos += `<div>
              <span class="tipo">${element[0]}</span>
              <span class="precio">${element[1]}</span>
              </div>
              `;}
              // console.log(element);
            });
            art = `
            <h4 class="articulo">${datos[0]}</h4><div class="articulo1">
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
            // console.log($tipos);
            // console.log(datos[0]);
            // console.log(datos[1]);
            // console.log(datos[2][0][0]);
            // console.log(datos[2][0][1]);
            seccion.innerHTML += art;
          
          document
          .querySelector(".menu")
          .appendChild(titulo);
          document
          .querySelector(".menu")
          .appendChild(seccion);
        }
        }
      }
    });
}

llamarDb(url);