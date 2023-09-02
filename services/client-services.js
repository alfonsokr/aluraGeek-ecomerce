const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json()); 
//conexion a esta url y genera un promise, then la recibe y la transformamos en formato json

export const produtServices = {
    listaProductos,
};
    







