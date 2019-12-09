$(document).ready(function () {

    /*
    Con el fin de favorecer la reutilización del código se hace uso del método on() de jquery para poder asignar el mismo
    evento click a multiples elementos en este caso todos comparten la misma clase "url-principal"
    */

    $(document).on("click", ".url-principal", function (evento) {

        var id_elemento = evento.target.getAttribute("id"); //atributo id del elemento que origina el evento click
        var elemento_padre = evento.target.parentElement; //elemento padre del valor obtenido en la variable id_elemento
        var url = "";


        if(elemento_padre.getAttribute("id") === "lista-planetas"){
            url = "pages/planetas"+"/"+id_elemento+".html";
        }else{
            url = "pages"+"/"+id_elemento+".html";
        }

        peticionAjax(url, {}, "principal");
    });


    function peticionAjax(url, datos, contenedor) {
        $.ajax({
            url : url,
            data : datos,
            type : 'GET',
            dataType: 'html',
            success : function (datos_respuesta) {

                if (contenedor === "principal") {
                    $("#contenido-principal").html(datos_respuesta);

                } else {
                    $("#sub-contenido").html(datos_respuesta);
                }

            },
            error:  function (xhr) {
                console.error("Se ha presentado un error :", xhr.status);
            }
        });
    }

    /*
    Con el fin de favorecer la reutilización del código se hace uso del método on() de jquery para poder asignar el mismo
    evento click a multiples elementos en este caso todos comparten la misma clase "url-secundaria"
    */

    $(document).on("click", ".url-secundaria", function (evento) {
        //atributo id del elemento que origina el evento click
        var id_elemento = evento.target.getAttribute("id");
        //atributo origen del elemento padre del valor obtenido en la variable id_elemento
        var id_elemento_padre = evento.target.parentElement.getAttribute("origen");

        var url = "pages/planetas/"+id_elemento_padre+"/"+id_elemento+".html";

        peticionAjax(url, {}, "secundario");

    });

    //Slider para las fotos de los planetas
    $('.carousel').carousel({
        interval: 2000
    });
});



