<template>
  <Promotion :imageUrl="promotionImage"/>
</template>

<script lang="ts">
import Promotion from '~/components/promotion.vue'
import { Character } from '~/types/character';

export default {
  components: {
    Promotion
  },
  data() {
    return {
      promotionImage: '',
      isLoading: false,
      error: null
    }
  },
  created() {
    this.fetchCharacterForPromotion()
  },
  methods: {
    async fetchCharacterForPromotion() {
      const response = await this.$axios.get<Character>(`character/${Math.floor(Math.random()*10)+1}`);
      this.promotionImage = response.data.image;
    }
  }
}
</script>
