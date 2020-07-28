<template>
  <header class="h-screen p-4 md:p-12 flex flex-col justify-between relative">
    <img src="/MidwestDesignWeek.svg" alt="Midwest Design Week" class="w-5/6" />
    <div class="absolute top-0 right-0 w-2/12">
      <svg-symbol />
    </div>
    <div class="flex justify-between flex-wrap leading-tight items-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest mb-8 xl:mb-0">
        A Virtual Design Conference_
      </h1>
      <time class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider"
        >09/21 - 25/2020</time
      >
    </div>

    <div class="flex justify-around items-center md:w-3/4 flex-wrap mx-auto">
      <ul class="uppercase text-lg tracking-wider font-semibold">
        <li>Louisville</li>
        <li>Cincinnati</li>
        <li>Toledo</li>
        <li>Indianapolis</li>
      </ul>
      <div class="w-32">
        <svg-logo />
      </div>
      <img src="/MWDW2020.svg" alt="#MWDW2020" class="mt-10 md:mt-0" />
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
