
//fetch api
//conexion con nuestro backend
function listaDeClientes() {
  return fetch('http://localhost:3000/perfil').then( function (respuesta){
    return respuesta.json();
  })
};

export const clientServices = {
  listaDeClientes
}