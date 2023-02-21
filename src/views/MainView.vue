<template>
  <div class="home">
    <NavbarView />
    <ListView />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import ListView from '@/components/ListView.vue'

export default {
  name: 'MainView',
  components: {
    NavbarView,
    ListView
  }
}
</script>
