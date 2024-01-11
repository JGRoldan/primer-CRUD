const btnRegistrar = document.querySelector("#btnRegistrar")

const registrarEstudiante = async () =>{
    try {
        let dataEstudiante = {
            estudiante:{
                nombre: obtenerValorInput('nombre'),
                apellido: obtenerValorInput('apellido'),
                email: obtenerValorInput('email')
            }
        }

        let {nombre, apellido, email} = dataEstudiante
        if (camposVacios(nombre, apellido, email)){
            alertaCamposVacios();
            return
        }

        const request = await fetch('http://localhost:3001/api/estudiantes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataEstudiante)
        });

        if (!request.ok) {
            const errorResponse = await request.json();
            console.error('Error en la solicitud fetch:', errorResponse);
            return;
          }

        estudianteRegistrado()

    } catch (error) {
        console.error('Error al registrar usuarios:', error);
    }
}

const obtenerValorInput = (id) => document.querySelector(`#${id}`).value;

const camposVacios = (nombre, apellido, email) =>{
    return (
        nombre && nombre.trim() === '' || 
        apellido && apellido.trim() === '' || 
        email && email.trim() === '')
}

const alertaCamposVacios = () =>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete los campos'
    })
}

const estudianteRegistrado = () =>{
       Swal.fire({
           icon: 'success',
           title: '¡Éxito!',
           text: 'Estudiante registrado con éxito',
       })
       .then(() => {
           window.location.href = 'index.html';
       });
}

btnRegistrar.addEventListener("click", async () => await registrarEstudiante())