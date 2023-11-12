<template>
  <div>
    <button @click="decrement" class="quantity-change-button">-</button>
    <input v-model.number="quantity" class="quantity-input"/>
    <button @click="increment" class="quantity-change-button">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
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