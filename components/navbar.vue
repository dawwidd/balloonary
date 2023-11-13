<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand @click="goToIndex"><span class="brand">DKROLAK.SHOP</span></b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button variant="outline-dark" @click="goToCart"><b-icon-cart></b-icon-cart> View Cart ({{ cartItemCount }})</b-button>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    goToIndex() {
      this.$router.push('/');
    },
    goToCart() {
      this.$router.push('/cart');
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
}
</script>

<style lang="scss" scoped>
.brand:hover {
  cursor: pointer;
}
</style>