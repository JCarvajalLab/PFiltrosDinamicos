# Proyecto: Lista de Tareas con Filtros Dinámicos
## Objetivo:
Crear una aplicación de gestión de tareas simple usando Vue 3 con las siguientes funcionalidades:

Agregar Tareas: El usuario puede añadir tareas con un título y una prioridad (Alta, Media, Baja).<br>
Marcar como Completadas: Las tareas pueden ser marcadas como completadas.<br>
Filtros Dinámicos: Filtrar las tareas por estado (todas, completadas, pendientes) y por prioridad.<br>
Persistencia Temporal: Guardar las tareas en el almacenamiento local del navegador usando localStorage.<br>
## Requisitos:
Framework: Usa Vue 3.
Estilo: Aplica Vuetify para dar un diseño limpio y responsive.<br>
Estado Global: Usa Vuex para manejar las tareas.<br>
HTTP Simulation: Usa Axios para simular una carga inicial de tareas desde una API falsa como https://jsonplaceholder.typicode.com/todos.<br>
## Componentes sugeridos:
TaskList: Lista las tareas. <br>
TaskForm: Formulario para añadir nuevas tareas.<br>
TaskItem: Componente individual para cada tarea.<br>
## Rutas sugeridas:
/: Página principal con la lista de tareas.<br>
/add: Página para agregar tareas.<br>
## Bonus:
Si tienes tiempo extra, puedes añadir:<br>

Tema claro/oscuro: Usa Vuetify para implementar un toggle.<br>
Animaciones: Aplica animaciones al agregar o eliminar tareas.<br>
