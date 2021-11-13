<template>
  <div class="mt-10 py-5 text-center bg-white text-black relative">
    <div>
      <div v-if="loading" key="loading">
        Поиск...
      </div>
      <div  v-else-if="users" key="user">
        <div v-for="user in users" :key="user.id" class="border-2 border-black rounded-lg p-4 mb-5">
          <div class="flex" >
            <div class="w-24 h-24 rounded-full object-cover flex-none block">
              <img :src="user.owner.avatar_url" :alt="user.owner.login" class="w-full h-full rounded-full"/>
            </div>
            <div class="pl-4 text-left flex flex-col">
              <div>
                <a :href="`${user.owner.html_url}`" target="_blank">
                  <h1 class="text-lg font-semibold text-black mb-1 hover:text-blue-900" >{{user.owner.name || user.owner.login}}</h1>
                </a>
                <a :href="`${user.owner.html_url}`" target="_blank">
                  <h2 class="text-base font-medium text-black mb-1 hover:text-blue-900">{{user.name}}</h2>
                </a>
              </div>
              <p class="text-sm text-black mb-2" >{{ user.description || 'Описание отсутствует'}}</p>
              <div class="flex">
                <span v-if="user.language" class="text-sm text-black mb-2 mr-4" >{{ user.language }}</span>
                <div class="text-sm text-black mb-2 flex items-center">
                  <img src="/images/star.png" alt="" class="w-4 h-4 mr-1">
                  <span>{{ user.stargazers_count || 0 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else key="not-found">
        Репозиторий не найден
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'User',
  computed: mapState(['loading', 'users'])
};
</script>