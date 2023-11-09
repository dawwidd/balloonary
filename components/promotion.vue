<template>
  <div class="container">
    <div class="row">
      <div class="col-12 promotion-tile">
        <div class="info">
          <h1 class="discount">25% OFF</h1>
          <h1 class="promotion-title">Winter Sale</h1>
          <p class="description">Discover our summer sale</p>
          <Button buttonText="Shop Now" :showArrow=true></Button>
        </div>
        <div class="foto" :style="{ backgroundImage: `url(${ imageUrl })`}"></div>
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
  props: {
    imageUrl: String
  }
}
</script>

<style>
.promotion-tile {
  background-color: #EAEEEF;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  padding: unset;
}

.info {
  padding: 64px;
  width: 60%;
  display: flex;
  flex-direction: column;
}

.foto {
  padding-right: unset;
  flex-grow: 1;
  border-radius: 0 40px 40px 0;
}

.discount {
  color: #EC5E2A;
  font-size: 48px;
}

.promotion-title {
  font-weight: 900;
  font-size: 64px;
}

.description {
  color: #67696E;
  font-size: 20px;
}

</style>