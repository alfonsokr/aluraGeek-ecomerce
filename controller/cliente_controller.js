import { produtServices } from "../services/client-services.js";


const crearNuevaLineaHtml = (url_imagen, categoria, nombreproducto, precio, descripcion) => {
    const linea = document.createElement("div");
    const contenido = `<div class="producto__containerblue">
                        <div class="producto__box">
                            <div class="producto__container__img">
                                <img class="producto__item__img" src="${url_imagen}" />
                                <button class="producto__edit__icon"><a href="edit-product.html"> <i class="producto__icon fas fa-pen"></i> </a></button>
                                <button class="producto__delete__icon"> <i class="producto__iconDelete fas fa-trash"></i> </button>
                            </div>
                        </div>
                        <ul class="producto__list">
                            <li class="producto__item__title">${nombreproducto}</li>
                            <li class="producto__item__subtitle">${precio}</li>
                            <li class="producto__detalle"><a class="producto__detalle__href" href="#">Ver producto</a></li>
                        </ul>
                    </div>`
    linea.innerHTML = contenido;
    return linea;
};
//data-producto es un data attribute que esta en el html, div producto__container
const productoContainer = document.querySelector("[data-producto]");





//sale del arrayFunction y se convierte en datos
//produtServices es el import de la linea 1
produtServices.listaProductos().then((datos) => {
    datos.forEach(producto => {
        const nuevaLinea = crearNuevaLineaHtml(producto.url_imagen, producto.categoria, producto.nombre, producto.precio, producto.descripcion);
        productoContainer.appendChild(nuevaLinea); //appendChild agrega una nueva linea html
    });
})
.catch((error) => alert("ocurrió un error"));