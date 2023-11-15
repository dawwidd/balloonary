<template>
  <div>
    <button @click="decrement" class="quantity-change-button">-</button>
    <input @blur="quantityChange" v-model.number="quantity" class="quantity-input"/>
    <button @click="increment" class="quantity-change-button">+</button>
  </div>
</template>

<script>
export default {
  props: {
    initialQuantity: Number
  },
  data() {
    return {
      quantity: 1,
    }
  },
  watch: {
    /**
     * Watch the quantity value and don't let the user set it below 1.
     * @param {number} newValue 
     */
    quantity(newValue) {
      if(newValue < 1) {
        this.quantity = 1;
        this.quantityChange();
      }
    }
  },
  mounted() {
    this.quantity = this.initialQuantity;
  },
  methods: {
    /**
     * Emit event and update quantity when user increments the input's value.
     */
    increment() {
      this.quantity++;
      this.$emit('increment');
    },
    /**
     * Emit event and update quantity when user decrements the input's value.
     */
    decrement() {
      this.quantity--;
      this.$emit('decrement');
    },
    /**
     * Emit event when user manually changes the input's value.
     */
    quantityChange() {
      this.$emit('quantity-change', this.quantity);
    }
  }
}
</script>

<style lang="scss" scoped>
.quantity-input {
  text-align: center;
  border: solid #ccc;
  border-width: 1px 0;
  padding: 5px;
  width: 50px;
  margin: -5px;
}
.quantity-change-button {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;

  &:first-child {
    border-right-width: 0;
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-left-width: 0;
    border-radius: 0 10px 10px 0;
  }
}
</style>