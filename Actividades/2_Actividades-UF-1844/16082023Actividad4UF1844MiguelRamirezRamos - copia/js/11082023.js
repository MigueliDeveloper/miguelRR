window.addEventListener("load", () => {



  const root = document.querySelector(':root');
  // Inyección de la página contacto y curso

  function inicio(){
    document.querySelector(':root');

    // function acceso(){
    //   document.querySelector("#cuerpoPrincipal"). innerHTML= 
    //   `

      
      
      
    //   `

    //   root.computedStyleMap.setProperty('--background-img', 'url(../media/imagen-fondo.png')
    // }

    // function registro(){


    
    // }

    function informacion(){
      document.querySelector("#cuerpoPrincipal").innerHTML= 
      `
      <div class="informacionAcademia">
        <div>
            <!-- <img src="" alt=""> -->
            <h1>Entra en nuestra Academia</h1>
            <p>Crea tu Itinerario Formativo</p>
            <button>Información</button>
        </div>
      </div>
      `
    }

    function curso(){
      document.querySelector("#cuerpoPrincipal").innerHTML=
      
      `
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
      <div class="informacionAcademia">
        <div class="formularioContacto">
          <form action="" method="POST" id="formulario" onsubmit="return false">
            
          <label for="nombre">Nombre</label>
            <input type="text" name="name" id="nombre" required maxlenght="50">
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

  }



})