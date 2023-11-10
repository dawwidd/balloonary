<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand href="/">DKROLAK.SHOP</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button variant="outline-dark" @click="goToCart"><b-icon-cart></b-icon-cart> View Cart</b-button>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    goToCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style>

</style>