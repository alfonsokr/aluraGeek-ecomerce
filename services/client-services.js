const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json()).catch(error => console.log(error)); 
//conexion a esta url y genera un promise, then la recibe y la transformamos en formato json

//recibe el value de los inputs del evento que viene del archivo registro_controller.js
const crearproducto = (url_imagen, categoria, nombreProducto, precio, descripcion) => {
   
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        // http trabaja con texto y stringify convierte a texto
        body: JSON.stringify({id: uuid.v4(),url_imagen, categoria, nombreProducto, precio, descripcion  }),
          
    });
};


const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE",

    });
};

export const produtServices = {
    listaProductos,
    crearproducto,
    eliminarProducto,
};
    







