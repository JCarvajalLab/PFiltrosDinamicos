<template>
  <div class="container">
    <h2>Detalles de la tarea</h2>
    <p>ID: {{ task.id }}</p>
    <p>Título: {{ task.title }}</p>
    <p>Completada: {{ task.completed ? 'Sí' : 'No' }}</p>
  </div>
</template>

<script>

export default {
    name: 'HomeView',
    components: {
    },
    props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 300px;
  margin: 40px auto;
  background-color:white;
}
</style>