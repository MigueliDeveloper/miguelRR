
function anadir(){
    var mensaje = {

        nombre: document.querySelector("#nombre").value,
        correo: document.querySelector("#correoElectronico").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value

    }
    var mensajes=[];
    mensajes.push(mensaje);
    localStorage.setItem('key', JSON.stringify(mensajes));

}

// Editar alumnos
const alumoEd = document.getElementById('alumnoEditar') 
const atributoEd = document.getElementById('atributoEditar')

window.addEventListener("load", () =>{
    let alumnoEd = document.getElementById('alumnoEditar');
    let alumnoEl = document.getElementById('alumnoEliminar');
    // for(let i=0; i< mensajes.length; i++){
    //     alumnoEd.innerHTML += `<option>${mensajes[i].nombre}</option>`
    //     alumnoEl.innerHTML += `<option>${mensajes[i].nombre}</option>`
    // }

    // Object.keys(mensajes[0]).forEach(element => {
    //    atributoEd.innerHTML += `<option>${element}</option>` 
    // });

    // let muestraAlumnos = document.getElementById('mostrarAlumnos');
    // muestraAlumnos.innerHTML = '';
    // for(let i = 0 ; i<mensajes.length; i++){
    //     muestraAlumnos.innerHTML += `
    //     <div class="contenedorAlumnos">
    //     <img src="${mensajes[i].urlImagen}">
    //     <div class="informacion">
    //     <p>${mensajes[i].nombre}</p>
    //     <p class="apellido"><span>Apellido: ${mensajes[i].apellido}<span 
    //     `;
    // }

})

// Inyecccion de la página contacto y curso
const root = document.querySelector(':root');

function inicio(){
    document.querySelector("#cuerpoPrincipal").innerHTML= 
    `
    <div class="parteLateral">
        <div class="acceder">
            <h3>Acceder</h3>
            <button>Profesor</button>
            <button>Alumno</button>
        </div>
        <div class="inscribete">
            <img src="media/imagenCurso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>
    <div class="informacionAcademia">
        <div>
            <!-- <img src="" alt=""> -->
            <h1>Entra en nuestra Academia</h1>
            <p>Crea tu Itinerario Formativo</p>
            <button>Información</button>
        </div>
    </div>
    `
    root.style.setProperty('--background-img', 'url(../media/imagen-fondo.png');
}

function curso(){
    document.querySelector("#cuerpoPrincipal").innerHTML=  
    ` 
    <div class="parteLateral">
        <div class="acceder">
            <h3>Nombre Usuario</h3>
            <p>Rol (Druida-nivel 40)</p>
        </div>
        <div class="inscribete">
            <img src="media/imagenCurso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>
    <div class="informacionAcademia">
        <div>
            <video src="media/VideoClase.mp4" controls></video>
        </div>
        <p>Esto es un video</p>
    </div>
    `    
    root.style.setProperty('--background-img', 'url(../media/curso.jpg');
}

function contacto(){
    document.querySelector("#cuerpoPrincipal").innerHTML=  
    `
    <div class="parteLateral">
        <div class="acceder">
            <h3>Nombre de Usuario</h3>
            <p>Rol (Mago- Nivel 25)</p>
        </div>
        <div class="inscribete">
            <img src="media/imagenCurso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
        <div class="formularioContacto">
            <form action="" method="POST" id="formulario" onsubmit="return false">
         
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required maxlength="50"><br>
                <span id="errorNombre"></span>
          
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="correoElectronico">
         
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
       
                <label for="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="4" rows="4"></textarea>
    
                <button id="botonAnadir" onclick="anadir()">Enviar</button>
            </form>
        </div> 
        <div>
            <p>Texto Legal</p>
        </div>
    </div>   
    
    `
    root.style.setProperty('--background-img', 'url(../media/contacto.jpg');

}

function profesora(){
    document.querySelector("#cuerpoPrincipal").innerHTML=  
    `
    <div class="parteLateral">
        <div class="acceder">
            <h3>Profesor</h3>
            <p>Rol (Mago- Nivel 25)</p>
        </div>
        <div class="inscribete">
            <img src="media/imagenCurso.jpg">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
       
        <div>
            <p>Texto Legal</p>
        </div>
    </div>   
    
    `
    root.style.setProperty('--background-img', 'url(../media/profesora.jpg');  
}

function alumnos(){
    document.querySelector("#cuerpoPrincipal").innerHTML=  
    `
    <div class="parteLateral">
        <div class="acceder">
            <h3>Alumno</h3>
            <p>Rol (Mago- Nivel 25)</p>
        </div>
        <div class="inscribete">
            <img src="media/imagenCurso.jpg">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
      
        <div>
            <p>Texto Legal</p>
        </div>
    </div>   
    
    `
    root.style.setProperty('--background-img', 'url(../media/alumnos.jpg');
    
}

function informacion(){

    document.querySelector("#cuerpoPrincipal").innerHTML=  
    `
    <div class="parteLateral">
        <div class="acceder">
            <h3>Alumno</h3>
            <p>Rol (Mago- Nivel 25)</p>
        </div>
        <div class="inscribete">
            <img src="../media/imagenCurso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
      
        <div>
            <p>Texto Legal</p>
        </div>
    </div>   
    
    `
    root.style.setProperty('--background-img', 'url(../media/alumnos.jpg');
}
