import { produtServices } from "../services/client-services.js";

//data attibute del formulario edit
const formulario = document.querySelector("[data-form]");




const obtenerInfoProducto = async () => {
    const url = new URL(window.location);
    const id  = url.searchParams.get("id");
    if(id == null){
        alert("error identificador null");
        window.location.href = "admin.html";
    } 
    const url_imagen     = document.querySelector("[data-url_imagen]");
    const categoria      = document.querySelector("[data-categoria]");
    const nombreProducto = document.querySelector("[data-nombreproducto]");
    const precio         = document.querySelector("[data-precio]");
    const descripcion    = document.querySelector("[data-descripcion]");

    try{
        const producto = await produtServices.detalleProducto(id);
        if(producto.url_imagen && producto.categoria && producto.nombreProducto && producto.precio && producto.descripcion){
            url_imagen.value      = producto.url_imagen;
            categoria.value       = producto.categoria; 
            nombreProducto.value  = producto.nombreProducto;
            precio.value          = producto.precio;
            descripcion.value     = producto.descripcion;
        }else{
            throw new Error();
        }
        
    }catch(error){
        alert("hubo un error, intenta de nuevo");
    }      
};

obtenerInfoProducto();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id  = url.searchParams.get("id");
    const url_imagen     = document.querySelector("[data-url_imagen]").value;
    const categoria      = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-nombreproducto]").value;
    const precio         = document.querySelector("[data-precio]").value;
    const descripcion    = document.querySelector("[data-descripcion]").value;
    
    produtServices.editarProducto(url_imagen, categoria, nombreProducto, precio, descripcion, id).then(() =>{
        alert("Producto modificado correctamente");
    });
});