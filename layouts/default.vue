<template>
  <div class="bg-offwhite">
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    AppFooter,
  },
};
</script>

<style lang="postcss"></style>
