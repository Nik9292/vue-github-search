import { createStore } from 'vuex'
import axios from 'axios';

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_LOADING = 'SET_LOADING';
const SET_USER = 'SET_USER';
const RESET_USER = 'RESET_USER';

const store = createStore({
  state: {
    searchQuery: '',
    loading: false,
    users: []
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_USER]: (state, users) => state.users = users,
    [RESET_USER]: state => state.users = null
  },
  actions: {
    setSearchQuery({commit}, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery);
    },
    async search({commit, state}) {
      commit(SET_LOADING, true);
      try {
        const {data} = await axios.get(`https://api.github.com/users/${state.searchQuery}/repos`);
        commit(SET_USER, data);
      } catch (e) {
        commit(RESET_USER);
      }
      commit(SET_LOADING, false);
    }
  }
})

export default store;