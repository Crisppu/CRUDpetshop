
//fetch api
//conexion con nuestro backend
function listaDeClientes() {
  return fetch('http://localhost:3000/perfil').then( function (respuesta){
    return respuesta.json();
  })
};

function crearCliente(nombre, email){
  return fetch('http://localhost:3000/perfil',{
    method:'POST',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify({nombre, email,  id:uuid.v4()})
  })
}

function eliminarCliente(id){
  //console.log(id)
  return fetch(`http://localhost:3000/perfil/${id}`,{
  method: "DELETE"
  })
}

function editarCliente(id){
  return fetch(`http://localhost:3000/perfil/${id}`).then(function(respuesta){
  return respuesta.json();
  });
};

function actualizarCliente(nombre,email,id){
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:'PUT',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify({nombre, email})
  }).then(function(respuesta){
    return respuesta
  }).catch((error)=>console.log(error))
}



export const clientServices = {
  listaDeClientes,
  crearCliente,
  eliminarCliente,
  editarCliente,
  actualizarCliente,

}