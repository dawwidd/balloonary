<template>
  <b-container>
    <div class="row">
      <div class="col-12">
        <div class="spinner-wrapper" v-if="isLoading">
            <b-spinner></b-spinner>
          </div>
          <div v-else class="foto" :style="{ backgroundImage: `url(${ character.image })`}"></div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    character: null,
    isLoading: true
  },
}
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.foto {
  height: 270px;
  width: 240px;
  background-size: cover;
  border-radius: 20px;
}
</style>