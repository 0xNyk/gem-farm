<template>
  <div class="max-w-2xl m-auto">
      <h1 class="lg:text-2xl text-center mb-10">Welcome to the WOOF Farm 🐶</h1>
  <div class="flex flex-row items-center">
    <div class="nes-container with-title flex-1 ml-5">
      <p class="title">Stake your WOOFer</p>
      <p class="mb-5">
        Choose this if you'd like to stake your WOOFer in the farm:
      </p>
      <router-link to="farmer">
        <button class="nes-btn bg-purple-500">Stake WOOFer</button>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GEM_FARM_PROG_ID } from '@gemworks/gem-farm-ts';
export default defineComponent({
  setup() {
    return {
      GEM_FARM_PROG_ID,
    };
  },
});
</script>
<style scoped></style>
