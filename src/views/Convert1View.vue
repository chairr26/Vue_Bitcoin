<template>
  <div class="home">
    <NavbarView />
    <ConvertOne />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import ConvertOne from '@/components/ConvertOne.vue'

export default {
  name: 'MainView',
  components: {
    NavbarView,
    ConvertOne
  }
}
</script>
