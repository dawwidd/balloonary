<template>
  <div class="container">
    <div class="spinner-wrapper" v-if="isLoading">
      <b-spinner></b-spinner>
    </div>
    <template v-else>
      <div class="row">
        <div class="col-lg-7">
          <!-- CartItem v-for item in cart -->
        </div>
        <div class="col-lg-5">
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
      isLoading: false
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>