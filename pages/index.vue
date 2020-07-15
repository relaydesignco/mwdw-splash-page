<template>
  <div>
    <app-hero></app-hero>
    <main class="px-4 pt-12 pb-20 max-w-screen-xl mx-auto">
      <h2 class="text-center text-2xl mb-10">Get informed about upcoming events</h2>
      <email-form
        form-action="https://aiga.us3.list-manage.com/subscribe/post"
        mc-u="751e598f443a47697e8b78cb9"
        mc-id="f248d566af"
      />
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
import EmailForm from '@/components/EmailForm.vue';

export default {
  components: {
    AppHero,
    EmailForm,
  },
};
</script>

<style lang="postcss"></style>
