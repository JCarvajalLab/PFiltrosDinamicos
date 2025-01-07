<template>
<ItemNavbar />
<div>
    <h1>
        homeview
    </h1>
</div>

<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'

export default {
    name: 'HomeView',
    components: {
        ItemNavbar,
        ItemFooter
    }
}
</script>

<style scoped>

</style>
