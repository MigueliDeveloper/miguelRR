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
            <img src="media/imagen-curso.jpg" alt="">
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
            <img src="../media/imagen-curso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>
    <div class="informacionAcademia">
        <div>
            <video src="../media/VideoClase.mp4" controls></video>
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
            <img src="../media/imagen-curso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
        <div class="formularioContacto">
            <form action="" method="POST" id="formulario" onsubmit="return false">
                <!-- Nombre -->
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required maxlength="50"><br>
                <span id="errorNombre"></span>
                <!-- Correo Electrónico  -->
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="correoElectronico">
                <!-- Asunto  -->
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
                <!-- Mensaje  -->
                <label for="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="4" rows="4"></textarea>
                <!-- Enviar  -->
                <input type="submit" value="Enviar" id="submit">Enviar<br>
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
            <img src="../media/imagen-curso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
        <div class="formularioContacto">
            <form action="" method="POST" id="formulario" onsubmit="return false">
                <!-- Nombre -->
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required maxlength="50"><br>
                <span id="errorNombre"></span>
                <!-- Correo Electrónico  -->
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="correoElectronico">
                <!-- Asunto  -->
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
                <!-- Mensaje  -->
                <label for="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="4" rows="4"></textarea>
                <!-- Enviar  -->
                <input type="submit" value="Enviar" id="submit">Enviar<br>
            </form>
        </div> 
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
            <img src="../media/imagen-curso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
        <div class="formularioContacto">
            <form action="" method="POST" id="formulario" onsubmit="return false">
                <!-- Nombre -->
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required maxlength="50"><br>
                <span id="errorNombre"></span>
                <!-- Correo Electrónico  -->
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="correoElectronico">
                <!-- Asunto  -->
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
                <!-- Mensaje  -->
                <label for="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="4" rows="4"></textarea>
                <!-- Enviar  -->
                <input type="submit" value="Enviar" id="submit">Enviar<br>
            </form>
        </div> 
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
            <img src="../media/imagen-curso.jpg" alt="">
            <h4>Inscribete</h4>
            <p>Lorem ipsum dolor sit, amet</p>
            <button>Informacion</button>
        </div>
    </div>

    <div class="informacionAcademia">
        <div class="formularioContacto">
            <form action="" method="POST" id="formulario" onsubmit="return false">
                <!-- Nombre -->
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required maxlength="50"><br>
                <span id="errorNombre"></span>
                <!-- Correo Electrónico  -->
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="correoElectronico">
                <!-- Asunto  -->
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
                <!-- Mensaje  -->
                <label for="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="4" rows="4"></textarea>
                <!-- Enviar  -->
                <input type="submit" value="Enviar" id="submit">Enviar<br>
            </form>
        </div> 
        <div>
            <p>Texto Legal</p>
        </div>
    </div>   
    
    `
    root.style.setProperty('--background-img', 'url(../media/alumnos.jpg');




}
