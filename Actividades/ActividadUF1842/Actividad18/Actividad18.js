/**
 * 1.	Crear un documento html con un formulario para pedir los datos de los alumnos:
 * a.	Código
 * b.	Nombre y Apellidos
 * c.	Edad
 * d.	Correo electrónico
 * e.	Teléfono
 * f.	Un select para seleccionar un tema (HTML, CSS, JavaScript)
 * 2.	Crear un script para ir rellenando un array con los datos de un alumno.
 * 3.	Mostrar los datos del alumno en el documento html.
 */

    var alumnos = [];

    document.getElementById("alumnoForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var codigo = document.getElementById("codigo").value;
      var nombre = document.getElementById("nombre").value;
      var edad = document.getElementById("edad").value;
      var correo = document.getElementById("correo").value;
      var telefono = document.getElementById("telefono").value;
      var tema = document.getElementById("tema").value;

      var alumno = {
        codigo: codigo,
        nombre: nombre,
        edad: edad,
        correo: correo,
        telefono: telefono,
        tema: tema
      };

      alumnos.push(alumno);

      mostrarDatosAlumno(alumno);
      document.getElementById("alumnoForm").reset();
    });

    function mostrarDatosAlumno(alumno) {
      var datosAlumno = document.getElementById("datosAlumno");
      datosAlumno.innerHTML = "Código: " + alumno.codigo + "<br>" +
                              "Nombre: " + alumno.nombre + "<br>" +
                              "Edad: " + alumno.edad + "<br>" +
                              "Correo: " + alumno.correo + "<br>" +
                              "Teléfono: " + alumno.telefono + "<br>" +
                              "Tema: " + alumno.tema;
    }

