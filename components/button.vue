<template>
  <b-button class="custom-button" variant="dark" @click="emitEvent">
    {{ buttonText }} <b-icon-arrow-right v-if="showArrow"></b-icon-arrow-right>
  </b-button>
</template>

<script>
export default {
  props: {
    buttonText: String,
    showArrow: Boolean,
    redirectTo: String
  },
  methods: {
    emitEvent() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss">
.custom-button {
  padding: 20px 80px 20px 80px;
  width: fit-content;
  font-weight: 900;
  border-radius: 10px;
}
</style>