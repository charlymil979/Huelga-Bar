let datos = {};
const url = "https://api.jsonbin.io/v3/b/67848b56e41b4d34e47677a6";
// mail: carlos.alberto
const key = "$2a$10$8Qhm0RTQSh3ar9zIVLqApO2sZl.4RLtmnqAfWw9C3EgcDJQP7JiXC";
// const url = "http://localhost:3000/menu";

const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  art,
  hh = "",
  arthh = "";

function llamarDb(url) {
  fetch(url, {
    headers: {
      "X-Access-Key": key,
    },
  })
    .then((resp) => resp.json())
    .then((dato) => {
      // console.log(dato)
      // console.log(dato.record.menu);
      const data = dato.record; //orig = dato.record
      // console.log(data)
      // Empezando a armar la estructura de datos
      for (const key in data) {
        const seccionhh = document.createElement("section");
        seccionhh.classList.add("seccion1");
        seccionhh.classList.add("visible");
        let clase = key.replaceAll(" ", "_");
        seccionhh.classList.add(`${clase}`);
        const titulohh = document.createElement("h3");
        titulohh.classList.add("seccion");
        titulohh.innerHTML = `${key}`;

        const seccion = document.createElement("section");
        seccion.classList.add("seccion1");
        const titulo = document.createElement("h3");
        titulo.classList.add("seccion");
        titulo.innerHTML = `${key}`;
        if (key != "id") {
          let clase2 = key.replaceAll(" ", "_");
          seccion.innerHTML = `<div class= 'pictures'><img src='./imagenes/${clase2}.jpg' alt='${key}'></div>`;
          for (const articulo in data[key]) {
            let $tipos = "";
            let $tiposhh = "";
            datos = data[key][articulo];
            // console.log(datos);

            $precio = "";

            //Armando el arreglo
            datos[2].forEach((element, i) => {
              if (datos[0].includes("INGREDIENTES")) {
                $tipos += `
                <span class="tipo">${element[0]} - </span>
                `;
                if (i > 0 && i % 3 === 0) {
                  $tipos += `<br>`;
                }
              } else {
                $tipos += `<div>
              <span class="tipo">${element[0]}</span>
              <span class="precio">${element[1]}</span>
              </div>
              `;
              }
              // console.log(element);

              if (element[2] != "" && element[2] != "undefined") {
                // console.log(element[2]);
                $tiposhh += `<div>
              <span class="tipo">${element[0]}</span>
              <span class="precio">${element[2]}</span>
              </div>`;
              }
            });
            art = `
            <div class="articulo1">
            <h4 class="articulo">${datos[0]}</h4>
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
            if ($tiposhh != "") {
              arthh = `
            <div class="hh1">
            <h4 class="hhart">${datos[0]}</h4>
            <div class="hhtipos">${$tiposhh}</div>
            </div>
            `;
              // <div class="descripcion">${datos[1]}</div>
              seccionhh.innerHTML += arthh;
              document.querySelector(".modal").appendChild(titulohh);
              document.querySelector(".modal").appendChild(seccionhh);
            }
            // console.log($tipos);
            // console.log(datos[0]);
            // console.log(datos[1]);
            // console.log(datos[2][0][0]);
            // console.log(datos[2][0][1]);
            seccion.innerHTML += art;

            document.querySelector(".menu").appendChild(titulo);
            document.querySelector(".menu").appendChild(seccion);
          }
        }
      }
      document.querySelector(".menu").innerHTML +=
        '<BUTTON  class="happy hh"><span class="hh">HAPPY HOUR</span><img class="click" src="./imagenes/click.svg" alt="click"></BUTTON> ';
    })
    .then(()=>{window.scrollTo(0,0)});
}

llamarDb(url);
