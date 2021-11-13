<template>
  <div class="container m-auto">
    <section class="w-6/12 m-auto px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">GitHub</h2>
      </header>
      <form class="relative">
        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input v-model="query" @input="debouncedSearch" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" placeholder="поиска репозитория" />
      </form>
      <slot></slot>
    </section>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'Search',
  computed: {
    ...mapState(['searchQuery']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      }
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'search']),
    debouncedSearch: debounce(function () {
      this.search();
    }, 500)
  }
}
</script>
