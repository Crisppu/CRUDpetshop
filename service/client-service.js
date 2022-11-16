const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement("tr");

  const contenido = `
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
      </td>`;
  linea.innerHTML = contenido;
  return linea;
};
const table = document.querySelector("[data-table]");

function listaDeClientes() {
  const promise = new Promise((resolve, reject) => {
    // comunicacion entre el frontend y el backend
    const http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/perfil");

    http.send();

    http.onload = () => {
      const respuesta = JSON.parse(http.response);
      if(http.status >= 400){
        reject(respuesta);
      }else{
        resolve(respuesta);
      }
    };
  });
  return promise;
};

listaDeClientes().then((result) => {
  console.log(result)
  result.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);

  });
}).catch( function(error){
alert('ocurrio un error');
})

