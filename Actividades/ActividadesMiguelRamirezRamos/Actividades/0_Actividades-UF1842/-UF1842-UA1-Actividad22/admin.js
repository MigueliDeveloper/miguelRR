function guardarAlmacenamientoLocal(llave, valorAGuardar){
    localStorage.setItem(llave, JSON.stringify(valorAGuardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos= JSON.parse(localStorage.getItem(llave));
    return datos;
}

// Añadir Alumnos
let alumnos = obtenerAlmacenamientoLocal('alumnos') || [];
let mensaje = document.getElementById('mensaje');

var añadirAlumno = document.getElementById('alumnoAñadir');
var añadirApellido = document.getElementById('apellidoAñadir');
var añadirEmail = document.getElementById('emailAñadir');
var añadirImagen = document.getElementById('ImagenAñadir');

document.getElementById('botonAñadir').addEventListener("click", function(event){
    event.preventDefault();
    let alumnoAñadir = añadirAlumno.value;
    let apellidoAñadir = añadirAlumno.value;
    let emailAñadir = añadirAlumno.value;
    let imagenAñadir = añadirAlumno.value;

    let van = true;
    
    if(alumnoAñadir == '' || apellidoAñadir == '' || emailAñadir == '' || imagenAñadir == ''){
        mensaje.classList.add('llenarCampos');
        setTimeout(() => { mensaje.classList.remove('llenarCampos')
        }, 5000);
        van = false;
    }else{
        for(let i = 0; i<alumnos.length; i++){
            if(alumnos[i].nombre == alumnoAñadir){
                mensaje.classList.add('repetidoError');
                setTimeout(() => {
                    mensaje.classList.remove('repetidorError')
                }, 2500);
                van = false;
            }
        }
    }

    if(van == true){
        alumnoAñadir.push({
            nombre: alumnoAñadir,
            apellido: apellidoAñadir,
            email: emailAñadir,
            urlImagen: imagenAñadir

        })

        mensaje.classList.add('realizado');
        setTimeout(() =>{
            mensaje.classList.remove('realizado');
            window.location.reload();
        }, 1500)

    }

    guardarAlmacenamientoLocal('alumnos', alumnos);

})

// Editar alumnos
const alumoEd = document.getElementById('alumnoEditar') 
const atributoEd = document.getElementById('atributoEditar')








window.addEventListener("load", () =>{
    let alumnoEd = document.getElementById('alumnoEditar');
    let alumnoEl = document.getElementById('alumnoEliminar');
    for(let i=0; i< alumnos.length; i++){
        alumnoEd.innerHTML += `<option>${alumnos[i].nombre}</option>`
        alumnoEl.innerHTML += `<option>${alumnos[i].nombre}</option>`
    }

    Object.keys(alumnos[0]).forEach(element => {
       atributoEd.innerHTML += `<option>${element}</option>` 
    });

    let muestraAlumnos = document.getElementById('mostrarAlumnos');
    muestraAlumnos.innerHTML = '';
    for(let i = 0 ; i<alumnos.length; i++){
        muestraAlumnos.innerHTML += `
        <div class="contenedorAlumnos">
        <img src="${alumnos[i].urlImagen}">
        <div class="informacion">
        <p>${alumnos[i].nombre}</p>
        <p class="apellido"><span>Apellido: ${alumnos[i].apellido}<span 
        `;
    }

})