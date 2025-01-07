<template>
<v-app>
    <ItemNavbar />
    <v-main>
        <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="task.title" :rules="titleRules" label="Título" required></v-text-field>
                <v-btn :disabled="!valid" color="primary" class="mr-4" @click="addTask">
                    Agregar Tarea
                </v-btn>
            </v-form>
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
    name: 'TaskFormView',
    components: {
        ItemNavbar,
        ItemFooter,
    },
    data() {
        return {
            task: {
                userId: 1, // Puedes cambiar esto según el usuario actual
                id: null, // Se generará automáticamente
                title: '',
                completed: false, // Por defecto, la tarea estará pendiente
            },
            valid: true,
            titleRules: [(v) => !!v || 'El título es requerido'],
        };
    },
    methods: {
        addTask() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    const lastTaskId = Math.max(...response.data.map(task => task.id));
                    const newTaskId = lastTaskId + 1;

                    const newTask = {
                        userId: 1, // Puedes cambiar esto según el usuario actual
                        id: newTaskId,
                        title: this.task.title,
                        completed: false, // La tarea se agregará como pendiente
                    };

                    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
                        .then(response => {
                            console.log('Tarea agregada:', response.data);
                            this.$emit('task-added', response.data); // Emitir evento personalizado
                            this.$router.push({
                                name: 'taskList'
                            });
                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
};
</script>
