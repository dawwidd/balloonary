export const state = () => ({
  cart: []
});

export const mutations = {
  addToCart(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity += item.quantity;
    }
    else {
      state.cart.push({ ...item, quantity: item.quantity });
    }
  },
  clearCart(state) {
    state.cart = [];
  },
  removeFromCart(state, item) {
    const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    if(index !== -1) {
      state.cart.splice(index, 1);
    }
  },
  incrementItem(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity += 1;
    }
  },
  decrementItem(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity -= 1;
    }
  },
  updateItem(state, item) {
    const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    state.cart[index].quantity = item.quantity;
  }
}

export const actions = {
  addToCart({ commit }, data) {
    commit('addToCart', data);
  },
  clearCart({ commit }) {
    commit('clearCart');
  },
  removeFromCart({ commit }, data) {
    commit('removeFromCart', data);
  },
  incrementItem({ commit }, data) {
    commit('incrementItem', data);
  },
  decrementItem({ commit }, data) {
    commit('decrementItem', data);
  },
  updateItem({ commit }, data) {
    commit('updateItem', data);
  }
}

export const getters = {
  getCart(state) {
    return state.cart;
  },
  cartTotal(state) {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  cartItemCount(state) {
    return state.cart.length;
  }
}