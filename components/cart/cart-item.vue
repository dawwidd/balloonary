<template>
  <div>
    <div class="spinner-wrapper" v-if="isLoading">
      <b-spinner></b-spinner>
    </div>
    <template v-else>
      <div class="row">
        <div class="col-4">
          <div class="foto" :style="{ backgroundImage: `url(${ character.image })`}"></div>
        </div>
        <div class="col-8 d-flex justify-content-between flex-column pl-1 py-2 pr-5 bg-white">
          <div>
            <div class="d-flex justify-content-between">
              <span class="name"><router-link style="text-decoration: none; color: inherit;" :to="`details/${character.id}`">{{ character.name }}</router-link></span>
              <span class="price">${{ (item.quantity * item.price).toFixed(2) }}</span>
            </div>
            <div class="characteristics">
              <span class="mr-2">Status: {{ character.status }};</span>
              <span class="mr-2">Origin: {{ character.origin.name }}</span>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <QuantityInput @quantity-change="updateItem" @increment="incrementItem" @decrement="decrementItem" :initialQuantity="item.quantity" ref="quantityInput"/>
            <b-button class="remove" variant="link" @click="removeFromCart">Remove</b-button>
          </div>
        </div>
      </div>
    </template>
    <hr class="separator-line">
  </div>
</template>

<script>
import QuantityInput from '~/components/details/quantity-input.vue';

export default {
  components: {
    QuantityInput
  },
  props: {
    item: null
  },
  data() {
    return {
      character: null,
      isLoading: true
    }
  },
  mounted() {
    this.$axios.get(`character/${this.item.id}`).then(res => {
      this.character = res.data;
    }).finally(() => {
      this.isLoading = false;
    })
  },
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
    },
    removeFromCart() {
      this.$store.dispatch('removeFromCart', {
        id: this.character.id
      })
    },
    updateItem() {
      this.$store.dispatch('updateItem', {
        id: this.character.id,
        quantity: this.$refs.quantityInput.quantity
      })
    },
    redirectToCharacter() {
      this.$router.push(`character/${this.character.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.separator-line {
  border: none;
  height: 1px;
  background-color: #eee;
  margin: 1.5rem 0;
}
.remove {
  font-size: 700;
  color: #666;
}
.characteristics {
  display: flex;
  justify-content: flex-start;
  color: #666;
}
.name {
  font-weight: 700;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.price {
  font-size: 18px;
}
.foto {
  border-radius: 20px;
  background-size: cover;
  height: 165px;
  width: 165px;
}
</style>