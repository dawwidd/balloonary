<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="foto" :style="{ backgroundImage: `url(${ character.image })`}"></div>
      </div>
      <div class="col-12 mt-2">
        <span class="name">{{ character.name }} </span>
      </div>
      <div class="col-12 characteristics">
        <span>Status: {{ character.status }}</span>
        <span>Origin: {{ character.origin.name }}</span>
        <span>Species: {{ character.species }}</span>
      </div>
      <div class="col-12">
        <span class="price">${{ price.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: null,
    isLoading: true
  },
  data() {
    return {
      price: 0
    }
  },
  mounted() {
    this.determinePrice(this.character.name);
  },
  methods: {
    /**
     * Deterimine the price based on character's name.
     * Arbitrary choice, given that there are no other values in the API's character model
     * one could use to assign a price.
     * @param {string} word
     */
    determinePrice(word) {
      let sum = 0;
      for (let i = 0; i < word.length; i++) {
        const char_code = word.charCodeAt(i);
        sum += char_code;
      }
      this.price = sum/10;
    },
  }
}
</script>

<style lang="scss" scoped>
.foto {
  height: 270px;
  width: auto;
  background-size: cover;
  border-radius: 20px;
}

.name, .price {
  font-weight: 700;
  font-size: 20px;
}

.characteristics {
  display: flex;
  flex-direction: column;
  color: #666;

  span {
    width: 100%;
  }
}
</style>