<template>
  <div>
    <Navbar class="mb-5"/>
    <nuxt/>
    <Footer class="footer"></Footer>
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
  position: absolute;
  bottom: 0;
}
</style>