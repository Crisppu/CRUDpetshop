
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

export const clientServices = {
  listaDeClientes,
  crearCliente
}