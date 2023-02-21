<template>
  <div class="home">
    <NavbarView />
    <ConvertTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import ConvertTwo from '@/components/ConvertTwo.vue'

export default {
  name: 'MainView',
  components: {
    NavbarView,
    ConvertTwo
  }
}
</script>
