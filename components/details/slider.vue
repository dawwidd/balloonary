<template>
  <div class="foto" :style="{ backgroundImage: `url(${ character.image })`}">
    
  </div>
</template>

<script>
export default {
  props: {
    character: null
  }
}
</script>

<style scoped>
.foto {
  flex-grow: 1;
  border-radius: 20px;
  background-size: cover;
  width: 100%;
  height: 450px;
}
</style>