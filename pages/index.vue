<template>
  <div>
    <app-hero></app-hero>
    <main class="px-4 md:px-12 lg:px-0 pt-12 max-w-screen-lg mx-auto md:grid grid-cols-2 gap-16">
      <div>
        <h2 class="text-3xl mb-1 uppercase font-bold">New This Year</h2>
        <p class="text-xl mb-12">
          Our world is shaped by <strong>culture</strong> in its many forms: customary beliefs,
          shared values, learned behavior, and traditions, to name a few. The
          <strong>diversity</strong> of experience and culture is what makes each person unique,
          which is why for our first ever virtual Design Week, we, the AIGA chapters from
          <strong>Cincinnati, Indianapolis, Louisville, and Toledo</strong>
          celebrate the many colorful voices of our communities.
        </p>
        <h2
          class="text-3xl mb-8 md:mb-0 uppercase font-bold leading-tight tracking-normal font-sans"
        >
          Save the Date
          <br />
          September 21 - 25, 2020
        </h2>
      </div>
      <div>
        <h2 class="text-3xl mb-4 uppercase font-bold">Stay In Touch</h2>
        <email-form
          form-action="https://aiga.us3.list-manage.com/subscribe/post"
          mc-u="751e598f443a47697e8b78cb9"
          mc-id="f248d566af"
        />
      </div>
    </main>
    <div class="px-4 md:px-12 lg:px-0 pt-12 pb-16 md:pb-32 max-w-screen-lg mx-auto">
      <h2 class="text-3xl mb-1 uppercase font-bold leading-tight">
        Interested in Sponsoring the Event?
      </h2>
      <p class="text-xl">
        Check out this year's sponsorhip packet for more information on
        <a
          href="/MWDW_2020_Sponsorship.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold"
        >
          Sponsorship Opportunities.
        </a>
      </p>
    </div>
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
