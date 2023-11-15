import createPersistedState from 'vuex-persistedstate';

/**
 * Make the state persist upon reloading the page
 */
export default ({ store }) => {
  createPersistedState()(store);
};