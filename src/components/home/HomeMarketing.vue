<template>
  <BaseCard class="home-marketing">
    <div class="home-marketing__skewed-bg">
    </div>
  </BaseCard>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .home-marketing {
    background: $bright-yellow;
    padding: 0;
    overflow: hidden;
    border: 1px solid $bright-yellow;
    min-height: 500px;

    @include respond-to(sm) {
      grid-column: span 2 / span 2;
      max-width: 500px;
    }

    &__skewed-bg {
      height: 100%;
      width: 100%;
      background: $light-yellow;
      clip-path: polygon(0 0, 100% 0, 100% 60%, 0 80%);
    }
  }
</style>