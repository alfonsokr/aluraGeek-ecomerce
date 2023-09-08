import { produtServices } from "../services/client-services.js";


const crearNuevaLineaHtml = (url_imagen, categoria, nombreproducto, precio, descripcion, id) => {
    const linea = document.createElement("div");
    const contenido = `<div class="producto__containerblue">
                        <div class="producto__box">
                            <div class="producto__container__img">
                                <img class="producto__item__img" src="${url_imagen}" />
                                <a class="producto__edit__icon" href="edit-product.html?id=${id}"> <i class="producto__icon fas fa-pen"></i> </a>
                                <button class="producto__delete__icon" id="${id}" > <i class="producto__iconDelete fas fa-trash"></i> </button>
                            </div>
                        </div>
                        <ul class="producto__list">
                            <li class="producto__item__title">${nombreproducto}</li>
                            <li class="producto__item__subtitle">${precio}</li>
                            <li class="producto__detalle"><a class="producto__detalle__href" href="#">Ver producto</a></li>
                        </ul>
                    </div>`
    linea.innerHTML = contenido;

    const btndelete = linea.querySelector("button");
    btndelete.addEventListener("click", () => {
        const id = btndelete.id;
        produtServices.eliminarProducto(id).then((respuesta) =>{
            
        }).catch((err) => alert("error al borrar producto"));    
    });


    return linea;
};
//data-producto es un data attribute que esta en el html, div producto__container
const productoContainer = document.querySelector("[data-producto]");





//sale del arrayFunction y se convierte en datos
//produtServices es el import de la linea 1
produtServices.listaProductos().then((datos) => {
    datos.forEach(({ url_imagen, categoria, nombreProducto, precio, descripcion, id }) => {
        const nuevaLinea = crearNuevaLineaHtml( url_imagen, categoria, nombreProducto, precio, descripcion, id);
        productoContainer.appendChild(nuevaLinea); //appendChild agrega una nueva linea html
    });
})
.catch((error) => alert("ocurrió un error"));



