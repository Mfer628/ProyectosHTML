

async function obtenerDatos(){

    const response = await fetch("http://127.0.0.1:5500/comentarios.json")
    const json = await response.json();
    console.log(json);
    console.log(json.Nombre)

}
obtenerDatos();