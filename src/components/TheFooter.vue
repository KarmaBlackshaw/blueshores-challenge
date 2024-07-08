<template>
  <div class="the-footer">
    <BaseShimmer class="the-footer__label" />

    <div class="the-footer__container">
      <BaseShimmer class="the-footer__icon" />
      <BaseShimmer class="the-footer__number" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.the-footer {
  &__label {
    display: inline-block;
    margin-bottom: 5px;
    height: 8px;
    width: 200px;
  }

  &__container {
    display: flex;
    gap: 5px;
  }

  &__icon {
    height: 20px;
    width: 20px;
  }

  &__number {
    height: 20px;
    width: 100px;
  }
}
</style>