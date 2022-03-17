<template>
  <div class="relative h-full min-h-screen">
    <TheNavBar />
    <img :src="require('./assets/woofcoins.png')" alt="" class="w-full h-100">
    <div class="p-10">
      <router-view />
    </div>
    <div class="pt-10"></div>
    <TheFooter />
  </div>
</template>

<script>
import woofcoins from '@/assets/woofcoins.png';
import TheNavBar from '@/components/TheNavBar';
import TheFooter from '@/components/gem-farm/TheFooter';
export default {
  components: { TheFooter, TheNavBar },
};
</script>

<style>
* {
  font-family: 'Fredoka One', cursive;
}
input[type='radio']:checked + span {
  @apply text-black;
}
</style>
