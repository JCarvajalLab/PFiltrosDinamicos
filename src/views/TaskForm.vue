<template>
  <v-app>
    <ItemNavbar />
    <v-main>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="task.title" :rules="titleRules" label="Título" required></v-text-field>
          <v-select
            v-model="task.completed"
            :items="completedOptions"
            :rules="completedRules"
            label="Completada"
            required
            @change="convertCompletedValue"
          ></v-select>
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
        title: '',
        completed: null,
      },
      valid: true,
      titleRules: [(v) => !!v || 'El título es requerido'],
      completedRules: [(v) => !!v || 'La completitud es requerida'],
      completedOptions: ['Sí', 'No'],
    };
  },
  methods: {
    convertCompletedValue(value) {
      if (value === 'Sí') {
        this.task.completed = true;
      } else {
        this.task.completed = false;
      }
    },
    addTask() {
      axios.post('https://jsonplaceholder.typicode.com/todos', this.task)
        .then(response => {
          console.log('Tarea agregada:', response.data);
          // Actualizar la lista de tareas
          this.$router.push({ name: 'taskList' });
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>