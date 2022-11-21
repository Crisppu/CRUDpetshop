import { clientServices } from "../service/client-service.js";
//console.log(clientServices)

const crearNuevaLinea = (nombre, email, id) => {
  //console.log(id)
  const linea = document.createElement("tr");

  const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
              <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
              >Editar</a
              >
           </li>
           <li>
              <button class="simple-button simple-button--delete"type="button" id="${id}">
              Eliminar
              </button>
           </li>
        </ul>
        </td>`;
  linea.innerHTML = contenido;
  const buttonEliminar = linea.querySelector('button')
  buttonEliminar.addEventListener("click", function(){
    const id = buttonEliminar.id;
    clientServices.eliminarCliente(id).then((respuesta)=>{
      console.log(respuesta)
    })

  });
  return linea;
};
const table = document.querySelector("[data-table]");
//conexion backend



//mostrar y generar la informacion
clientServices.listaDeClientes().then((result) => {
  //console.log(result);
  result.forEach((perfil) => {
    //console.log(perfil)
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email, perfil.id);
    table.appendChild(nuevaLinea);
  });
}).catch(function (error) {alert("ocurrio un error");});

