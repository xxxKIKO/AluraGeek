import { productServices } from "../js/product-services.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const urlImage = document.querySelector("[data-urlImage]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;

    console.log(nombre, " - ", precio);
    productServices.crearProducto(urlImage, nombre, precio).then (respuesta => {
        window.location.href = "/screens/registro_completado.html";
    }).catch(err => copnsole.log(err));
});
