<template>
  <div class="mt-10 p-5 text-center bg-white text-black relative">
    <div>
      <div v-if="loading" key="loading">
        Loading
      </div>
      <div  v-else-if="users" key="user">
        <div v-for="user in users" :key="user.id" class="w-full border-2 border-black rounded-lg p-4 mb-5">
          <div class="flex" >
            <div class="w-24 h-24 rounded-full object-cover flex-none block">
              <img :src="user.owner.avatar_url" :alt="user.owner.login" class="w-full h-full rounded-full"/>
            </div>
            <div class="pl-4 text-left flex flex-col">
              <a :href="`${user.owner.html_url}`" target="_blank">
                <h1 class="text-lg font-semibold text-black mb-0.5" >{{user.owner.name || user.owner.login}}</h1>
              </a>
              <span class="text-sm text-black mb-2" >{{ user.description || 'Описание отсутствует'}}</span>
              <span class="text-sm text-black mb-2" >{{ user.stargazers_count || 'Нет звезд'}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else key="not-found">
        User not found
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