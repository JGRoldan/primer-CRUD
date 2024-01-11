// const modal = document.querySelector("#modal")

const estudianteAEliminar = (id) =>{
      Swal.fire({
                  title: '¿Estás seguro?',
                  text: "No podrás revertir esto",
                  icon: 'warning',
                  showConfirmButton: false,
                  showCancelButton: true,
                  showDenyButton: true,
                  denyButtonText: 'Borrar',
                  cancelButtonText: 'Cancelar'
      }).then((result) => {
         if (result.isDenied) {
             borrarEstudiante(id);
         }
      });
}

const borrarEstudiante = async (id) =>{
    const request = await fetch(`http://localhost:3001/api/estudiantes/${id}`, {
        method:'DELETE',
        headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
        }
    })
    
    if (!request.ok) {
        const errorResponse = await request.json();
        console.error('Error en la solicitud fetch:', errorResponse);
        return;
      }

    cargarEstudiantes()
}