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

//fetch api
function listaDeClientes() {
  return fetch('http://localhost:3000/perfil').then( function (respuesta){ //then porque nos esta retornado una promesa
    return respuesta.json();
    // return fetch('http://localhost:3000/perfil') abre una conexion con esta url, luego de que se ejecute esa promesa
    //.then( function (respuesta){ //ENTONCES la vamos a recibir aqui
    //return respuesta.json(); y la vamos a transformar en el formato json
  })
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

