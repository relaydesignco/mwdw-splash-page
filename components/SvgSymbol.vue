<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
    <g style="isolation: isolate;">
      <g id="symbol">
        <rect
          id="red"
          x="180"
          width="180"
          height="180"
          transform="translate(540 180) rotate(-180)"
          fill="#cb1d1f"
          style="mix-blend-mode: multiply;"
        />
        <rect
          id="green"
          width="180"
          height="180"
          transform="translate(180 180) rotate(-180)"
          fill="#8fc73e"
          style="mix-blend-mode: multiply;"
        />
        <rect
          id="blue"
          x="90"
          y="90"
          width="180"
          height="180"
          transform="translate(360 360) rotate(-180)"
          fill="#5d9bcc"
          style="mix-blend-mode: multiply;"
        />
        <rect
          id="teal"
          x="180"
          y="180"
          width="180"
          height="180"
          transform="translate(540 540) rotate(-180)"
          fill="#4dc1b5"
          style="mix-blend-mode: multiply;"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SvgSymbol',
};
</script>

<style lang="scss" scoped></style>
