const cargarEstudiantes = async () =>{
    
    try {
        const request = await fetch('http://localhost:3001/api/estudiantes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const estudiantes = await request.json();
        let estudiantesData = ''

        estudiantes.forEach(({ id_est, nombre, apellido, email }) => {
            const btnActions = `
            <td class="px-6 py-4">
                <div class="flex gap-2">
                    <svg onclick="actualizarEstudiante('${id_est}','${nombre}','${apellido}','${email}')" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer text-green-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    <svg onclick="estudianteAEliminar(${id_est})" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>                                                                                 
                </div>
            </td>
            `
            let estudianteHtml = `
            <tr class="border-b uppercase">
                <th scope="row" class="px-6 py-4">
                    ${nombre}
                </th>
                <td class="px-6 py-4">
                    ${apellido}
                </td>
                <td class="px-6 py-4">
                    ${email}
                </td>
                ${btnActions}
            </tr>
            `
            estudiantesData+=estudianteHtml
        });
        document.querySelector("#tbody").innerHTML=estudiantesData;

    } catch (error) {
        console.error( {'Error al cargar usuarios' : error.message})
    }
}

document.addEventListener("DOMContentLoaded", async () => await cargarEstudiantes())