import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector('[data-form]');
async function obtenerInformacion(){
    const url =new URL(window.location);//obtenemos http://127.0.0.1:5500/screens/editar_cliente.html
    const id = url.searchParams.get('id') //dentro del params que es lo que estamos buscando y es el'id'//http://127.0.0.1:5500/screens/editar_cliente.html ?id=8bd575b9-9aa7-40b5-b0b5-f3e8c7a77c70

    if(id === null){
      window.location.href = "../screens/error.html";
    }
    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');
    try {
      const perfil = await  clientServices.editarCliente("id");
      if(perfil.nombre && perfil.email){
        nombre.value = perfil.nombre;
        email.value = perfil.email;
        // clientServices.editarCliente(id).then(function(perfil){//perfil tiene un objeto osea un usuario ya registrado
        //   nombre.value = perfil.nombre;
        //   email.value = perfil.email;
        // });
      }else{ throw new Error();}//activamos el error del catch

    } catch (error) {
      window.location.href = "../screens/error.html";
    }

};
obtenerInformacion();

formulario.addEventListener("submit", function(evento){
  evento.preventDefault();
  const url =new URL(window.location);
  const id = url.searchParams.get('id')
  const nombre = document.querySelector('[data-nombre]').value
  const email = document.querySelector('[data-email]').value
  clientServices.actualizarCliente(nombre,email,id).then(function(respuesta){
  window.location ='../screens/edicion_concluida.html';
  });
})


