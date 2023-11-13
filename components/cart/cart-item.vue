<template>
  
</template>

<script>
export default {
  methods: {
    incrementItem() {
      this.$store.dispatch('incrementItem', {
        id: this.character.id,
        quantity: this.$refs.quantityInput.quantity
      });
    },
    decrementItem() {
      this.$store.dispatch('decrementItem', {
        id: this.character.id,
        quantity: this.$refs.quantityInput.quantity
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>