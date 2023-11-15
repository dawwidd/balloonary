export const state = () => ({
  cart: []
});

export const mutations = {
  /**
   * Add an item to the cart if it isn't there already
   * @param {*} state 
   * @param {*} item 
   */
  addToCart(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity += item.quantity;
    }
    else {
      state.cart.push({ ...item, quantity: item.quantity });
    }
  },
  /**
   * Reset the Cart to an empty array
   * @param {*} state 
   */
  clearCart(state) {
    state.cart = [];
  },
  /**
   * Remove an item from the Cart
   * @param {*} state 
   * @param {*} item 
   */
  removeFromCart(state, item) {
    const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    if(index !== -1) {
      state.cart.splice(index, 1);
    }
  },
  /**
   * Increment item's quantity in the Cart
   * @param {*} state 
   * @param {*} item 
   */
  incrementItem(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity += 1;
    }
  },
  /**
   * Decrement item's quantity in the Cart
   * @param {*} state 
   * @param {*} item 
   */
  decrementItem(state, item) {
    const characterAlreadyInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if(characterAlreadyInCart) {
      characterAlreadyInCart.quantity -= 1;
    }
  },
  /**
   * Update item's quantity in the cart
   * @param {*} state 
   * @param {*} item 
   */
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
  /**
   * Return the state of the cart
   * @param {*} state 
   * @returns {array}
   */
  getCart(state) {
    return state.cart;
  },
  /**
   * Compute and return total price of items in the Cart based on their price and quantity
   * @param {*} state 
   * @returns {number}
   */
  cartTotal(state) {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  /**
   * Return the count of distinct items in the cart
   * @param {*} state 
   * @returns {number}
   */
  cartItemCount(state) {
    return state.cart.length;
  }
}