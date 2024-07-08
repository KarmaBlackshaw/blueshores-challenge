<template>
  <div class="home-view">
    <BaseSteps
      :steps="['Setup An Account', 'Done!']"
      :current-step="0"
      loading
      class="home-stepper"
    />

    <div
      class="home-view__container"
    >
      <HomeForm class="home-view__account-form" />

      <HomeMarketing class="home-view__marketing" />

      <TheFooter class="home-view__footer" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  padding: 20px;

  @include respond-to(sm) {
    padding: 0;
  }

  &__footer {
    width: 100%;
  }

  &__container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: auto;
    width: 100%;

    @include respond-to(sm) {
      width: auto;
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }

  &__account-form {
    flex-shrink: 0;
    grid-column: span 1 / span 1;

    @include respond-to(sm) {
      grid-column: span 3 / span 3;
      max-width: 700px;
    }
  }

  &__marketing {
    grid-column: span 1 / span 1;

    @include respond-to(sm) {
      grid-column: span 2 / span 2;
    }
  }
}

.home-stepper {
  margin-bottom: 20px;
}

</style>