import instance from "../Config/axios"

export function getAllProductos(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=motog")
    .then(res=>res.json());
}
export function crearProducto(data){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=motog",data,{
        method:"POST"
    })
    .then(res=>res.json());
}

export function getByIdProductos(idproducto){
    return instance.get("items/"+idproducto)
}
