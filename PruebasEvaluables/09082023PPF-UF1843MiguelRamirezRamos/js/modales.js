const modal_container= document.getElementById("modal_container")
const modal_btn1 = document.getElementById("uno")
    

    window.addEventListener("load", () => {
        createModal(`
          <h3 class="modal-title">Abrir modal Emergente</h3>
          <img class="modal-img" src="../media/avatar3.jpg" alt="">
          <p class="modal-description">Hola modal emergente</p>
          <button class="modal-btn">Contacto</button>
          <a href="#" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
        `, "modal-aparecer")
      })


    modal_btn1.addEventListener("click", () => {
        createModal(`
            <h3>Abrir modal 1</h3>
            <img src="../media/avatar3.jpg" alt="">
            <a href="#" target="_blank" rel="noopener noreferrer">Alumno !!</a>
        `, "modal-desdeArriba")
    })

    const createModal = (content = "sin contenido", style= "") => {
        modal_container.innerHTML= `
            <div class="modal" id="modal">
                <div class="modal-content ${style}">
                    ${content}
                    <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                </div>
            </div>
        `
        
        document.getElementById("modal").addEventListener("click", (e) => {
            console.log(e.target.id)
            if(e.target.id === "modal" || e.target.id === "modal_btn_closed") {
                modal_container.innerHTML = ""
            }
        })

    }
