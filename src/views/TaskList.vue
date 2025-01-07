<template>
<v-app>
    <ItemNavbar />
    <v-main>
        <v-container>
            <v-data-table :headers="headers" :items="filteredTasks" :sort-by="[{ key: 'id', order: 'asc' }]">
                <!-- Slot para la barra superior (filtros) -->
                <template #top>
                    <v-toolbar flat>
                        <v-toolbar-title>Lista de Tareas</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-btn class="mb-2" color="primary" @click="filterTasks('all')">
                            Todas
                        </v-btn>
                        <v-btn class="mb-2" color="success" @click="filterTasks('completed')">
                            Completadas
                        </v-btn>
                        <v-btn class="mb-2" color="warning" @click="filterTasks('pending')">
                            Pendientes
                        </v-btn>
                    </v-toolbar>
                </template>

                <!-- Slot para personalizar las filas -->
                <template #item="{ item }">
                    <tr>
                        <!-- Columna ID -->
                        <td>{{ item.id }}</td>
                        <!-- Columna Título -->
                        <td :class="{ 'task-completed': item.completed }">
                            {{ item.title }}
                        </td>
                        <!-- Columna Completada (Checkbox) -->
                        <td>
                            <v-checkbox v-model="item.completed" :disabled="item.completed" @change="updateTaskStatus(item)"></v-checkbox>
                        </td>
                        <!-- Columna Acciones (Ver Detalle) -->
                        <td>
                            <v-btn color="primary" size="small" @click="viewTaskDetails(item)">
                                Ver Detalle
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-container>
    </v-main>
    <ItemFooter />
</v-app>
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue';
import ItemFooter from '../components/ItemFooter.vue';
import axios from 'axios';

export default {
    name: 'TaskListView',
    components: {
        ItemNavbar,
        ItemFooter,
    },
    data() {
        return {
            tasks: [], // Lista completa de tareas
            filteredTasks: [], // Tareas filtradas
            filter: 'all', // Filtro actual
            headers: [{
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: 'Título',
                    key: 'title'
                },
                {
                    title: 'Completada',
                    key: 'completed'
                },
                {
                    title: 'Acciones',
                    key: 'actions',
                    sortable: false
                },
            ],
        };
    },
    created() {
        this.fetchTasks(); // Cargar tareas al crear el componente
    },
    mounted() {
        // Limpiar el LocalStorage cuando el usuario cierre o recargue la página
        window.addEventListener('beforeunload', this.clearLocalStorage);
    },
    beforeUnmount() {
        // Remover el listener cuando el componente se desmonte
        window.removeEventListener('beforeunload', this.clearLocalStorage);
    },
    methods: {
        // Obtener tareas desde la API
        async fetchTasks() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                this.tasks = response.data;

                // Recuperar el estado desde LocalStorage
                const tasksStatus = JSON.parse(localStorage.getItem('tasksStatus')) || {};

                // Aplicar el estado guardado a las tareas
                this.tasks = this.tasks.map(task => {
                    if (Object.prototype.hasOwnProperty.call(tasksStatus, task.id)) {
                        task.completed = tasksStatus[task.id];
                    }
                    return task;
                });

                this.filteredTasks = this.tasks; // Inicialmente mostrar todas las tareas
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        },

        // Filtrar tareas según el estado
        filterTasks(filterType) {
            this.filter = filterType;
            if (filterType === 'all') {
                this.filteredTasks = this.tasks;
            } else if (filterType === 'completed') {
                this.filteredTasks = this.tasks.filter((task) => task.completed);
            } else if (filterType === 'pending') {
                this.filteredTasks = this.tasks.filter((task) => !task.completed);
            }
        },

        // Actualizar el estado de una tarea (marcar como completada)
        async updateTaskStatus(task) {
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                    completed: task.completed,
                });
                console.log('Tarea actualizada:', task);

                // Guardar el estado en LocalStorage
                this.saveTaskStatusToLocalStorage(task);
            } catch (error) {
                console.error('Error updating task:', error);
            }
        },

        // Guardar el estado de la tarea en LocalStorage
        saveTaskStatusToLocalStorage(task) {
            const tasksStatus = JSON.parse(localStorage.getItem('tasksStatus')) || {};
            tasksStatus[task.id] = task.completed;
            localStorage.setItem('tasksStatus', JSON.stringify(tasksStatus));
        },

        // Redirigir a la vista de detalles de la tarea
        viewTaskDetails(task) {
            console.log('Ver detalles de la tarea:', task);
            this.$router.push({
                name: 'TaskDetail',
                params: {
                    id: task.id
                }
            });
        },

        // Limpiar el LocalStorage
        clearLocalStorage() {
            localStorage.removeItem('tasksStatus');
        },
    },
};
</script>

<style scoped>
.task-completed {
    text-decoration: line-through;
    /* Subrayado que cruza el texto */
    color: gray;
    /* Opcional: Cambiar el color del texto para que sea más notorio */
}
</style>
