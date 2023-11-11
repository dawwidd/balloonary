<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar class="mb-5"/>
    <nuxt class="app flex-grow-1"/>
    <Footer class="footer mt-5"></Footer>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
Footer {
  position: sticky;
  bottom: 0;
  z-index: 100;
}

.app {
  overflow-y: auto;
}
</style>