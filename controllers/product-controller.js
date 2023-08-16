import { productServices } from "../js/product-services.js"

//backticks estos son los que permiten combinar codigo HTML con JS
const crearnuevoProducto = (urlImage, nombre, price, id) => {
    const card = document.createElement('div');
    const contenido = `
            <div class="product">
                <img src="${urlImage}" width="200" height="200" alt="ssd">
                <div class="iconos-esquina">
                <div class="icono editar" id="${id}" data-editar-id> <a href="../screens/editar_producto.html?id=${id}"> <i class="fas fa-pen"></i></a> </div>
                <div class="icono eliminar" id="${id}" data-eliminar-id><i class="fas fa-trash-can"></i></div>
              </div>
                <h5 class="product__name">${nombre}</h5>
                <p class="product__price">${price}</p>
                <a class="see_product" href="../screens/producto.html?id=${id}">Ver Producto</a>
            </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    // esta parte es para el boton de eliminar
    const btn = card.querySelector("[data-eliminar-id]");
    btn.addEventListener("click", () => {
      const id = btn.id;
      productServices.eliminarProducto(id).then( (respuesta) => {
        console.log(respuesta);
      }).catch(err => alert("Ocurrió un error"))
    });

    // const btn2 = card.querySelector("[data-editar-id]");
    // btn2.addEventListener("click", () => {
    //   const id2 = btn2.id;
    //   console.log(id2);
    //   productServices.actualizarProducto(id2).then( (respuesta) => {
    //     console.log(respuesta);
    //   }).catch(err => alert("Ocurrió un error"))
    // });
  
    return card;
  }

  const productos = document.querySelector("[data-product]");

  productServices.listaProductos().then((data) => {
    data.forEach(({urlImage, nombre, price, id}) => {
      const nuevoProducto = crearnuevoProducto(urlImage, nombre, price, id);
      productos.appendChild(nuevoProducto);
    });
  }).catch((error) => alert("Ocurrió un error"));



    //abrir http (método, url)
  // CRUD (create, read, update, delete)
  //Métodos HTTP para las funciones del CRUD
  // Create - POST
  // Read - GET
  // Update - PUT/PATCH
  // Delete - DELETE