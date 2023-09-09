
import { produtServices } from "../services/client-services.js";
//recibe el data attribute del formulario que esta en la vista nuevoproducto.html
const formulario = document.querySelector("[data-formProduct]");

//escucha el evento submit del form
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url_imagen     = document.querySelector("[data-url_imagen]").value;
    const categoria      = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-nombreproducto]").value;
    const precio         = document.querySelector("[data-precio]").value;
    const descripcion    = document.querySelector("[data-descripcion]").value;
    // console.log(categoria, "-", precio );

    //se le pasa a la funcion que esta en el archivo client-services crearproducto los parametros 
    produtServices.crearproducto(url_imagen, categoria, nombreProducto, precio, descripcion).then((respuesta) => {
        
    }).catch(err => console.log(err));
    alert("Producto agregado correctamente");
    window.location.reload();
});