<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand @click="goToIndex"><span class="brand">DKROLAK.SHOP</span></b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button class="cart-button" variant="outline-dark" @click="goToCart"><b-icon-cart class="mr-1"></b-icon-cart> View Cart <div class="item-count ml-2">{{ cartItemCount }}</div></b-button>
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
.item-count {
  display: inline;
  top: -10px;
  right: -10px;
  background-color: #EC5E2A;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
.cart-button {
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}
.brand:hover {
  cursor: pointer;
}
</style>