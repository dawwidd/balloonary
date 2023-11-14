<template>
  <div class="container">
    <div class="spinner-wrapper" v-if="isLoading">
      <b-spinner></b-spinner>
    </div>
    <template v-else>
      <div class="row order">
        <div class="col-lg-7 mb-5">
          <h1 class="name">Your Cart</h1>
          <CartItem class="my-4" v-for="item in cartItems" :item="item" :key="item.id"></CartItem>
        </div>
        <div class="col-lg-5 mb-5">
          <Checkout/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CartItem from '~/components/cart/cart-item.vue';
import Checkout from '~/components/cart/checkout.vue';

export default {
  components: {
    CartItem,
    Checkout,
  },
  data() {
    return {
      isLoading: false,
      cartItems: []
    }
  },
  mounted() {
    this.cartItems = this.$store.getters.getCart;
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-size: 36px;
  font-weight: 700;
}
.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .order {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>