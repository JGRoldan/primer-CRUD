# Sistema CRUD de Estudiantes
Este proyecto es un simple sistema CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar estudiantes. El sistema consta de un backend implementado en Node JS y Express JS, y un frontend implementado en HTML, CSS y Javacsript.

## Backend
El backend se encarga de manejar la lógica de la base de datos y proporciona endpoints para realizar operaciones CRUD en la base de datos de estudiantes.

### Endpoints
Obtener todos los estudiantes
```
GET /api/estudiantes
```
Obtener un estudiante por ID
```
GET /api/estudiantes/{id}
```
Agregar un nuevo estudiante
```
POST /api/estudiantes
```
Actualizar un estudiante existente
```
PUT /api/estudiantes/{id}
```
Eliminar un estudiante
```
DELETE /api/estudiantes/{id}
```

## Frontend
El frontend proporciona una interfaz de usuario simple para interactuar con el sistema CRUD de estudiantes.

### Funcionalidades
- Visualizar la lista de estudiantes.
- Agregar un nuevo estudiante.
- Ver detalles de un estudiante específico.
- Actualizar la información de un estudiante.
- Eliminar un estudiante de la lista.
## Tecnologías utilizadas
HTML  
CSS  
JavaScript  
### Backend
Node JS  
Express JS

## Squema
```
estudiantes(id, nombre, apellido, email)
```
