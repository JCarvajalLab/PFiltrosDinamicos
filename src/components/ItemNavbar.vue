<template>
<v-app-bar app class="bg-teal-accent-4" :elevation="0" rounded>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    <v-app-bar-title>
        <!-- <v-btn text @click="goToHome" style="padding: 0;">
            <img :src="logo" alt="Logo" class="logo" /> 
        </v-btn> -->
    </v-app-bar-title>

    <template v-slot:append>
        <div class="d-none d-md-flex" style="">
            <v-btn text @click="goHome" style="margin: 0 10px;">Inicio</v-btn>
            <v-btn text @click="goFormulario" style="margin: 0 10px;">Formulario</v-btn>
            <v-btn text @click="goListado" style="margin: 0 10px;">Listado</v-btn>
            <v-btn text @click="goContacto" style="margin: 0 10px;">Contacto</v-btn>
        </div>

        <!-- Icono del carrito -->
        <div style="display: flex; align-items: center;">
            <v-btn icon="mdi-cart-arrow-down" text @click="goCarro" style="margin: 0 10px;"></v-btn>
            <v-badge v-if="totalCantidad > 0" color="red" :content="totalCantidad" style="margin-left: -10px; margin-right:10px"></v-badge>
        </div>
    </template>
</v-app-bar>

<!-- Menú de navegación lateral -->
<v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
        <v-list-item @click="goHome">
            <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goFormulario">
            <v-list-item-title>Todos los Productos</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goListado">
            <v-list-item-title>Información</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goContacto">
            <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            //logo: require('@/assets/preview.png'),
        };
    },
    methods: {
        goHome() {
            this.$router.push({
                name: 'home'
            });
            this.drawer = false;
        },
        goFormulario() {
            this.$router.push({
                name: 'taskForm'
            });
            this.drawer = false;
        },
        goListado() {
            this.$router.push({
                name: 'taskList'
            });
            this.drawer = false;
        },
        goContacto() {
            this.$router.push({
                name: 'contacto'
            });
            this.drawer = false;
        },
        goCarro() {
            this.$router.push({
                name: 'carrito'
            });
            this.drawer = false;
        },
    }
};
</script>

<style scoped>
.logo {
    height: 40px;
    margin: 0;
}
</style>
