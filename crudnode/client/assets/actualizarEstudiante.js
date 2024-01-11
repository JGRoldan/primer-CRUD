const btnActualizar = document.querySelector("#btnActualizar")

const actualizarEstudiante = (id, nombre, apellido, email) => {
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    
    window.location.href = 'actualizar-estudiante.html';
}

if(window.location.href.includes('actualizar-estudiante.html')){
    document.addEventListener('DOMContentLoaded', function() {
        const nombre = localStorage.getItem('nombre');
        const apellido = localStorage.getItem('apellido');
        const email = localStorage.getItem('email');
        const id = localStorage.getItem('id');

        document.querySelector('#nombre').value = nombre;
        document.querySelector('#apellido').value = apellido;
        document.querySelector('#email').value = email;
        
        btnActualizar.addEventListener("click", async () => await updateMethod(id))
    });
}

const updateMethod = async (id) => {

    const data = {
        nombre: document.querySelector('#nombre').value,
        apellido:  document.querySelector('#apellido').value,
        email:  document.querySelector('#email').value
    };

    const request = await fetch(`http://localhost:3001/api/estudiantes/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
        
    if (!request.ok) {
        const errorResponse = await request.json();
        console.error('Error en la solicitud fetch:', errorResponse);
        return;
      }

    estudianteActualizado()
}

const estudianteActualizado = () =>{
       Swal.fire({
           icon: 'success',
           title: '¡Éxito!',
           text: 'Estudiante actualizado con éxito',
       })
       .then(() => {
           localStorage.clear()
           window.location.href = 'index.html';
       });
}

