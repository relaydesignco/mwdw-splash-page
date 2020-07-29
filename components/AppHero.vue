<template>
  <header class="px-4 py-4 md:p-12 relative">
    <div class="absolute top-0 right-0 w-2/12">
      <svg-symbol />
    </div>
    <img src="/MidwestDesignWeek.svg" alt="Midwest Design Week" class="w-6/12" />
    <h1 class="text-xl md:text-3xl lg:text-4xl uppercase leading-tight tracking-widest mt-4 mb-4">
      A Virtual Design Conference_
    </h1>
    <time class="text-3xl lg:text-5xl font-semibold tracking-wider block mb-8 md:mb-20">
      09/21 - 25/2020
    </time>
    <div class="flex justify-around items-center md:w-3/4 lg:w-7/12 flex-wrap mx-auto md:mb-12">
      <ul class="uppercase text-lg md:text-xl tracking-wider font-semibold">
        <li>Louisville</li>
        <li>Cincinnati</li>
        <li>Toledo</li>
        <li>Indianapolis</li>
      </ul>
      <div class="w-32 md:w-48">
        <svg-logo />
      </div>
      <img src="/MWDW2020.svg" alt="#MWDW2020" class="mt-10 md:mt-0 w-48 md:w-64" />
    </div>
  </header>
</template>

<script>
// import SvgTitle from '@/components/SvgTitle';
// import SvgHashtag from '@/components/SvgHashtag';
import SvgSymbol from '@/components/SvgSymbol';
import SvgLogo from '@/components/SvgLogo';

export default {
  name: 'AppHero',
  components: {
    // SvgTitle,
    // SvgHashtag,
    SvgSymbol,
    SvgLogo,
  },
  data() {
    return {
      tagline: 'Midwest Design Week',
    };
  },
};
</script>

<style lang="postcss" scoped></style>
