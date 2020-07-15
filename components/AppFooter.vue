<template>
  <footer class="bg-gray-400">
    <div class="p-4 max-w-screen-xl mx-auto text-xs">
      <p>© {{ year }} AIGA Midwest Design Week</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss" scoped></style>
