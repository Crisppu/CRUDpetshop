// TODO: comunicacion entre el frontend y el backend
const http = new XMLHttpRequest; //nueva comunicacion entre frond y el back
 /*
    * que es el CRUD -metodos htt
    * C: create-crear - POST
    * R: read-leer - GET
    * U: update-actualizar - PUT/PATCH
    * D: delete-eliminar - DELETE
 */
    //* abrir http (metodo, url)
http.open('GET', 'http://localhost:3000/perfil')

http.send()// se va encargar de enviar nuestra peticion desde nuestro proyecto hacia nuestro servidor

http.onload = () => { // una ves qie cargue nuestra peticion nos envie una respuesta
   const data = http.response;
   console.log(data)
}


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




