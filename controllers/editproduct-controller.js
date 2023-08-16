import { productServices } from "../js/product-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);

    if(id == null){
        window.location.href = "/screens/error.html"
    }

    const urlImage = document.querySelector("[data-urlImage]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");

    try{
        const producto = await productServices.detalleProducto(id)
        console.log({producto});
        urlImage.value = producto.urlImage
        nombre.value = producto.nombre;
        precio.value = producto.price;
    }catch(error){
        console.log("Error:", error);
    }

};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlImage = document.querySelector("[data-urlImage]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;

    productServices.actualizarProducto(urlImage, nombre, price, id).then(() => {
        window.location.href = "/screens/registro_completado.html";
    });
});