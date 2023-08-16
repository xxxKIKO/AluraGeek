import { productServices } from "../js/product-services.js";

const crearnuevoProducto = (urlImage, nombre, price, id) => {
    const card = document.createElement('div');
    const contenido = `
            <div class="product">
                <img src="${urlImage}" width="200" height="200" alt="ssd">
                <h5 class="product__name">${nombre}</h5>
                <p class="product__price">${price}</p>
                <a class="see_product" href="../screens/productos.html">Regresar</a>
            </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
  }

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);

    if(id == null){
        window.location.href = "/screens/error.html"
    }

    try{
        const producto = await productServices.detalleProducto(id)
        console.log({producto});
        const productos = document.querySelector("[data-product]");
        const urli = producto.urlImage;
        const nom = producto.nombre;
        const pri = producto.price;
        const idd = producto.id;
        const nuevoProducto = crearnuevoProducto(urli, nom, pri, idd);
        productos.appendChild(nuevoProducto); 
    }catch(error){
        console.log("Error:", error);
    }

}

obtenerInformacion();


