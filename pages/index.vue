<template>
  <div class="container">
    <div class="row">
      <Promotion/>
    </div>
    <h1 class="mt-5">Explore our latest drops</h1>
    <div class="row position-relative">
      <div class="spinner-wrapper" v-if="isLoading">
        <b-spinner></b-spinner>
      </div>
      <div v-else class="scrollable d-flex" ref="scrollContainer">
        <div @click="redirectToDetails(character.id)" class="col-3 product-column pt-3" v-for="(character, index) in characters" :key="index" :class="{'first-product': index === 0, 'last-product': index === characters.length - 1}">
          <Product :character="character"></Product>
        </div>
      </div>
    </div>
    <div class="row mt-3 scroll-arrows">
      <button class="scroll-arrow left-arrow" @click="scrollLeft">&lt;</button>
      <button class="scroll-arrow right-arrow" @click="scrollRight">&gt;</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Promotion from '~/components/promotion.vue';
import Product from '~/components/product.vue';

export default Vue.extend({
  components: {
    Promotion,
    Product
  },
  data() {
    return {
      characters: [],
      isLoading: true,
      error: null
    }
  },
  mounted() {
    this.$axios.get(
      `character/${this.getNRandomNumbers(4)}`
    ).then(response => {
      this.characters = response.data
    }).finally(() => {
      this.isLoading = false;
    })
  },
  methods: {
    /**
     * Generate an array of n random numbers
     * @param {number} n
     */
    getNRandomNumbers(n: number) {
      const result = [];
      while(result.length < n) {
        const r = Math.floor(Math.random() * 826) + 1;
        if(result.indexOf(r) === -1) result.push(r);
      }
      return result;
    },
    scrollLeft() {
      const container = this.$refs.scrollContainer as HTMLElement;
      if (container) {
        container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
      }
    },
    scrollRight() {
      const container = this.$refs.scrollContainer as HTMLElement;
      if (container) {
        container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
      }
    },
    redirectToDetails(characterId: number) {
      this.$router.push(`details/${characterId}`);
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
}
.product-column {
  min-width: 240px;
  max-width: 270px;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  &.first-product {
    margin-left: 0;
    &:hover::before {
      right: 14px;
    }
  }
  
  &.last-product {
    margin-right: 0;

    &:hover::before {
      left: 14px;
    }
  }
}

.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}


.scrollable {
  overflow-x: hidden;
  flex-wrap: nowrap;

  > div {
    flex: 0 0 auto;
  }
}

.col-3 {
  &:first-child {
    padding-left: 0;
    margin-left: 0;
  }
  
  &:last-child {
    padding-right: 0;
    margin-right: 0;
  }
}



.scroll-arrows {
  margin-left: 0;
  display: none;
}

.scroll-arrow {
  background-color: #f6f6f6;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;

  &.left-arrow {
    left: -20px;
  }

  &.right-arrow {
    right: -20px;
  }
}



@media (max-width: 1200px) {
  .scroll-arrows {
    display: flex;
  }
}
</style>
