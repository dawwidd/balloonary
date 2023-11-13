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
    state.cart = state.cart.filter(cartItem => cartItem.id = item.id);
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