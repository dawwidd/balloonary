<template>
  <div class="form-wrapper">
    <div class="info">
      <div class="col-12">
        <h1 class="name">Summary</h1>
      </div>
      <div class="totals">
        <div class="col-12 mt-3">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="col-12 mt-3">
          <span>Shipping and delivery</span>
          <span>${{ shipping.toFixed(2) }}</span>
        </div>
        <div class="col-12 mt-3">
          <span>Tax</span>
          <span>${{ tax.toFixed(2) }}</span>
        </div>
        <div class="col-12 mt-3">
          <span>Discount</span>
          <span class="discount">-${{ discount.toFixed(2) }}</span>
        </div>
      </div>
    </div>
    <hr class="separator-line">
    <div class="form">
      <div class="col-12">
        <div class="totals">
          <div>
            <span class="total">Total</span>
            <span>${{ getTotal().toFixed(2) }}</span>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="col-12">
        <Button class="w-100" buttonText="Checkout" :showArrow=true @click="checkout()"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      subtotal: this.$store.getters.cartTotal,
      shipping: 15,
      tax: 9,
      discount: 6,
    }
  },
  methods: {
    checkout() {
      this.$store.dispatch('clearCart');
      this.$router.push('/');
    },
    getTotal() {
      return this.subtotal + this.shipping + this.tax - this.discount;
    }
  }
}
</script>

<style lang="scss" scoped>
.discount {
  color: #EC5E2A;
}
.spacer {
  height: 45px;
}
.name {
  font-size: 36px;
  font-weight: 700;
}
.separator-line {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 1.5rem 0;
}
.totals {
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 20px;
      &.total {
        font-weight: 700;
      }
    }
  }
}

.form-wrapper {
  padding: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
</style>