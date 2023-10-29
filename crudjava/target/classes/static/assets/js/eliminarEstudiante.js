const modal = document.querySelector("#modal")

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
        console.log(result)
         if (result.isDenied) {
             borrarEstudiante(id);
         }
      });
}

const borrarEstudiante = async (id) =>{
    const request = await fetch(`api/estudiantes/${id}`, {
        method:'DELETE',
        headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
        }
    })
    cargarEstudiantes()
}