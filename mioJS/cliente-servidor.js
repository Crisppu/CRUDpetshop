const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement("tr");

  const contenido = `<tr>
     <td class="td" data-td>${nombre}</td>
     <td>${email}</td>
     <td>
     <ul class="table__button-control">
         <li>
           <a
           href="../screens/editar_cliente.html"
           class="simple-button simple-button--edit"
           >Editar</a
           >
        </li>
        <li>
           <button
           class="simple-button simple-button--delete"
           type="button"
        >
           Eliminar
           </button>
        </li>
     </ul>
     </td>
     </tr>`;

  linea.innerHTML = contenido;
  return linea;
};
const table = document.querySelector("[data-table]");

// TODO: comunicacion entre el frontend y el backend
const http = new XMLHttpRequest(); //nueva comunicacion entre frond y el back
/*
 * que es el CRUD -metodos htt
 * C: create-crear - POST
 * R: read-leer - GET
 * U: update-actualizar - PUT/PATCH
 * D: delete-eliminar - DELETE
 */
//* abrir http (metodo, url)
http.open("GET", "http://localhost:3000/perfil");

http.send(); // se va encargar de enviar nuestra peticion desde nuestro proyecto hacia nuestro servidor
//TODO:funcion anonima
//  http.onload= function() {
//      const data = http.response;
//      console.log(data)
//   }
//TODO:funcion fecha - arrow function
//  http.onload = () => {
//      const data = http.response;
//      console.log(data)
//  }

http.onload = () => {
  const data = JSON.parse(http.response);
  console.log(data);
  data.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);
  });
};
