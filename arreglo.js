//Arreglo de objetos

var inmuebles=[
    {idinmuble:10,direccion:'calle10',telefono:1,precio:100,estado: true
    },
    {idinmuble:20,direccion:'calle20',telefono:2,precio:200,estado:true
    },
    {idinmuble:30,direccion:'calle30',telefono:3,precio:300,estado:true
    },
    {idinmuble:40,direccion:'calle40',telefono:4,precio:400,estado:true
    },
    {idinmuble:50,direccion:'calle50',telefono:5,precio:500,estado:true
    },
    {idinmuble:60,direccion:'calle60',telefono:6,precio:600,estado:false
    },
    {idinmuble:70,direccion:'calle70',telefono:7,precio:700,estado:true
    },
    {idinmuble:80,direccion:'calle80',telefono:8,precio:800,estado:true
    },
    {idinmuble:90,direccion:'calle90',telefono:9,precio:900,estado:true
    },
    {idinmuble:00,direccion:'calle00',telefono:0,precio:000,estado:true
    }
]



function buscar() { 
    let id= parseInt(document.getElementById("numero").value);
    let result = inmuebles.filter(function(mueble){
           return mueble.idinmuble==id;
        })
    if (result.length > 0) {
        resultados.style.display="";
        document.getElementById("direccion").value = result[0].direccion;
        document.getElementById("telefono").value = result[0].telefono;
        document.getElementById("precio").value = result[0].precio;
        document.getElementById("estado").checked = result[0].estado;
    } else {
        alert("No encontrado")
        resultados.style.display="none";
        document.getElementById("numero").value="";
        document.getElementById("direccion").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("estado").checked = "";
    }
}
function busqueda() {
    let desde=parseInt(document.getElementById("desde").value);
    let hasta=parseInt(document.getElementById("hasta").value);
    //var activo=document.getElementById("activo").value===true;
    return {desde,hasta};
}

function listarInmuebles() {
        let {desde,hasta}= busqueda();
        
        inmueblesDisponibles = inmuebles.filter(function(mueble)
        {
             return mueble.estado == true && mueble.precio >= desde && mueble.precio <= hasta;
        }) 
        formModal.style.display = "none";
      
     if (!inmueblesDisponibles.length) 
     {
      alert("No se han encontrado inmuebles disponibles con ese precio");
      return;
     }
     else
    {
        inmueblesDisponibles.forEach(function(inmueble) 
        {
            alert("Los inmuebles disponibles son: "
            +'\n' + 'ID Inmueble: ' + inmueble.idinmuble
            +'\n' + 'Dirección:' + inmueble.direccion
            +'\n' +'Teléfono: ' + inmueble.telefono
            +'\n' +'Precio: ' + inmueble.precio
            +'\n' +'Estado: Disponible '
            +'\n' +'------------------------------','\n');
        });
    }
  }

  function Agregar_datos() {
    resultados.style.display="";
    Enviar.style.display="";
    /*
    {let id= parseInt(document.getElementById("numero").value);
    let direccion= document.getElementById("direccion").value;
    let telefono=  document.getElementById("telefono").value;
    let precio =document.getElementById("precio").value;
    let estado=  document.getElementById("estado").checked;}

*/

  }
  
  
  