<template>
  <div>
    <div class="max-w-4xl m-auto">
      <h1 class="lg:text-2xl text-center mb-10">🐶 Welcome to the WOOF FARM 🐶</h1>
      <div class="flex lg:flex-row gap-4">
        <div class="flex flex-row items-center">
          <div class="nes-container with-title flex flex-col align-middle content-center ml-5">
            <p class="title text-center">Stake your <span class="text-purple-500">WOOFer</span></p>
            <p class="mb-5 text-center">
              Click here if you'd like to stake your <span class="text-purple-500">WOOFer</span> in the farm:
            </p>
            <router-link to="farmer" class="flex content-center mx-auto">
              <button class="nes-btn bg-purple-500 text-center text-white mxs-auto">
                Stake WOOFer
              </button>
            </router-link>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="nes-container with-title flex flex-col align-middle content-center ml-5">
            <p class="title text-center">Stake your <span class="text-purple-500">$WOOF</span></p>
            <p class="mb-5 text-center">
              Click here if you'd like to stake your <span class="text-purple-500">$WOOF</span> in the farm:
            </p>
            <router-link to="farmer" class="flex content-center mx-auto">
              <button class="nes-btn bg-purple-200 text-center mxs-auto">
                Stake WOOF
              </button>
            </router-link>
          </div>
        </div>
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
