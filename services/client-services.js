const listaProductos = () => fetch("https://64ffae7d18c34dee0cd3e669.mockapi.io/producto").then((respuesta) => respuesta.json()).catch(error => console.log(error)); 
//conexion a esta url y genera un promise, then la recibe y la transformamos en formato json
//http://localhost:3000/producto url para trabajar con el json de manera local

//recibe el value de los inputs del evento que viene del archivo registro_controller.js
const crearproducto = (url_imagen, categoria, nombreProducto, precio, descripcion) => {
   
    return fetch("https://64ffae7d18c34dee0cd3e669.mockapi.io/producto", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        // http trabaja con texto y stringify convierte a texto
        body: JSON.stringify({id: uuid.v4(),url_imagen, categoria, nombreProducto, precio, descripcion  }),
          
    });
};


const eliminarProducto = (id) => {
    return fetch(`https://64ffae7d18c34dee0cd3e669.mockapi.io/producto/${id}`,{
        method: "DELETE",

    });
};

const detalleProducto = (id) => {
    return fetch(`https://64ffae7d18c34dee0cd3e669.mockapi.io/producto/${id}`).then((respuesta) =>
    respuesta.json()
    );
};

const editarProducto = (url_imagen, categoria, nombreProducto, precio, descripcion, id) => {
    return fetch(`https://64ffae7d18c34dee0cd3e669.mockapi.io/producto/${id}`, {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        // http trabaja con texto y stringify convierte a texto
        body: JSON.stringify({id, url_imagen, categoria, nombreProducto, precio, descripcion  }),
        })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};


export const produtServices = {
    listaProductos,
    crearproducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
};
    







