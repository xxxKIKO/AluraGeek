//Fetch API
const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json()).catch(error => console.log(error));


const crearProducto = (urlImage, nombre, price) => {
  return fetch("http://localhost:3000/productos",{
    method:"POST",
    headers:{
      "content-Type": "application/json"
    },
    body: JSON.stringify({urlImage, nombre, price, id: uuid.v4()})
  })
}

const eliminarProducto = (id) => {
  console.log("Eliminar a ---> ", id);
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: 'DELETE',
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then ((respuesta) => respuesta.json());
}

const actualizarProducto = (urlImage, nombre, price, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method:'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify ({ urlImage, nombre, price }),
  }).then((respuesta) => respuesta)
  .catch((err) => console.log(err));
}

export const productServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
