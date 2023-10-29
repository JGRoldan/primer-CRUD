document.addEventListener("DOMContentLoaded", (e)=>{
    const btnRegistrarAlumno = document.querySelector("#btnRegistrarAlumno"),
          btnVolver = document.querySelector("#btnVolver")

    if(btnRegistrarAlumno) {
        btnRegistrarAlumno.addEventListener('click', () => redirect("/registrar-estudiante.html"));
    }
    if(btnVolver) {
        btnVolver.addEventListener('click', () => redirect("/index.html"));
    }
})

const redirect = (goTo) =>{
    window.location.href = goTo
}
