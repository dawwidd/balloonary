<template>
  <div class="form-wrapper">
    <div class="info">
      <div class="col-12">
        <span class="name">{{ character.name }} </span>
      </div>
      <div class="col-12 characteristics">
        <span class="mr-2">Status: {{ character.status }};</span>
        <span class="mr-2">Origin: {{ character.origin.name }}</span>
      </div>
      <div class="col-12 mt-3">
        <span class="price">${{ price.toFixed(2) }}</span>
      </div>
    </div>
    <hr class="separator-line">
    <div class="form">
      <div class="col-12">
        <span class="label">Quantity</span>
        <QuantityInput :initialQuantity="1" ref="quantityInput" class="mt-2"/>
      </div>
      <div class="col-12">
        <Button class="w-100" buttonText="Add to Cart" :showArrow=false @click="addToCart()"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityInput from '~/components/details/quantity-input.vue';
import Button from '~/components/button.vue';

export default {
  components: {
    QuantityInput,
    Button
  },
  props: {
    character: null
  },
  data() {
    return {
      quantity: 1,
      price: 0
    }
  },
  mounted() {
    this.determinePrice(this.character.name);
  },
  methods: {
    /**
     * Deterimine the price based on character's name.
     * 
     * An arbitrary choice, given that there are no other values in the API's character model
     * one could use to assign a price.
     */
    determinePrice(word) {
      let sum = 0;
      for (let i = 0; i < word.length; i++) {
        const char_code = word.charCodeAt(i);
        sum += char_code;
      }
      this.price = sum/10;
    },
    /**
     * Add the character, their quantity, and price to the store
     */
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.character.id,
        price: this.price,
        quantity: this.$refs.quantityInput.quantity
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.label {
  font-weight: 700;
  font-size: 18px;
}
.separator-line {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 1.5rem 0;
}
.form-wrapper {
  padding: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 700;
  font-size: 24px;
}

.price {
  font-size: 24px;
}

.characteristics {
  display: flex;
  justify-content: flex-start;
  color: #666;
}
</style>