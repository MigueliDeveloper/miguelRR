
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

}
