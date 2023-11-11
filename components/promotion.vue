<template>
  <div class="container">
    <div class="col-12 promotion-tile">
        <div class="info">
          <h1 class="discount">25% OFF</h1>
          <h1 class="promotion-title">Winter Sale</h1>
          <p class="description">Discover our summer sale</p>
          <Button buttonText="Shop Now" :showArrow=true></Button>
        </div>
        <div class="spinner-wrapper" v-if="isLoading">
          <b-spinner></b-spinner>
        </div>
        <div v-else class="foto" :style="{ backgroundImage: `url(${ imageUrl })`}"></div>
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
      imageUrl: '',
      isLoading: true,
      error: null
    }
  },
  mounted() {
    this.$axios.get(`character/${Math.floor(Math.random()*20)+1}`).then(response => {
      this.imageUrl = response.data.image;
    }).finally(() => {
      this.isLoading = false;
    })
  },
}
</script>

<style scoped>
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
  background-size: cover;
}

.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
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

@media (max-width: 990px) {
  .promotion-tile {
    flex-direction: column-reverse;
    height: 40rem;
  }

  .info {
    width: 100%;
    height: 60%;
    align-items: center;
  }

  .foto {
    flex-grow: 1;
    border-radius: 40px 40px 0 0;
  }
}

@media (max-width: 475px) {
  .promotion-title {
    font-size: 12vw;
  }

  .discount {
    font-size: 10vw;
  }

  .description {
    font-size: 5vw;
  }
}

</style>