<template>
  <div class="container">
    <div class="spinner-wrapper" v-if="isLoading">
      <b-spinner></b-spinner>
    </div>
    <template v-else>
      <div class="row product-info">
        <div class="col-lg-6 mb-5">
          <Slider :character="character"/>
        </div>
        <div class="col-lg-6 mb-5">
          <ProductForm :character="character"/>
        </div>
      </div>
      <Details :character="character"></Details>
    </template>
  </div>
</template>

<script>
import Slider from '~/components/details/slider.vue';
import Details from '~/components/details/details.vue';
import ProductForm from '~/components/details/product-form.vue';

export default {
  components: {
    Slider,
    Details,
    ProductForm
  },
  data() {
    return {
      character: null,
      isLoading: true
    }
  },
  mounted() {
    this.$axios.get(`character/${this.$route.params.id}`)
      .then(response => {
        this.character = response.data;
      }).finally(() => {
        this.isLoading = false;
      })
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

.container {
  overflow: visible;
}
</style>