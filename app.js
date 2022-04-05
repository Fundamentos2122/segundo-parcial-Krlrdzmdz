
var recetas = new Array();
var ingredientes = new Array();

function guardar_ingrediente()
{
    const boton_add = document.getElementById("ingredient-name").value;
    ingredientes.push(boton_add);
}

function actualizar_Lista()
{
    const lista_ul = document.getElementById("ingredient-temp-list");
    var elemento_ingrediente = document.createElement("li");
        elemento_ingrediente.innerHTML = ingredientes[ingredientes.length - 1];
        lista_ul.appendChild(elemento_ingrediente);
}

function guardar_receta()
{
    var receta_actual = new Array();
    const nombre_receta = document.getElementById("nombre").value;
    const Url_Imagen = document.getElementById("URL_imagen").value;
    const descripcion_receta = document.getElementById("desripcion").value;
    
    receta_actual.push(nombre_receta);
    receta_actual.push(Url_Imagen);
    receta_actual.push(descripcion_receta);
    receta_actual.push(ingredientes);

    recetas.push(receta_actual);
    ingredientes = new Array();
    localStorage.setItem("Nombre:"+recetas.length, recetas[recetas.length-1].nombre_receta);
    console.log(localStorage);
}

function actualizar_lista_recetas()
{
    for(i = 1; i < recetas.length; i++)
    {
        var receta_aux = localStorage.getItem(i)
        const div_recetas = document.createElement("div");
        const imagen = new Image();
        imagen.src = receta_aux.Url_Imagen;
        div_recetas.innerHTML = receta_aux.nombre_receta;
        const vista = document.getElementById("view");
        vista.appendChild(div_recetas);
    }
}

function guardar_archivo()
{
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var fh = fso.OpenTextFile("info.txt", 8, false, 0);
    for(i = 0; i < recetas.length; i++)
    {
        fh.WriteLine("Hola");
        fh.WriteLine(recetas[i].nombre_receta);
        fh.WriteLine(recetas[i].Url_Imagen);
        fh.WriteLine(recetas[i].descripcion_receta);
        for(j = 0; j < recetas[i].ingredientes.length; j++)
        {
            fh.WriteLine(recetas[i].ingredientes[j]);
        }
    }
    fh.Close();
}