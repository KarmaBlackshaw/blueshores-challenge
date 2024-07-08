<template>
  <BaseCard class="home-form">
    <div class="home-form-heading">
      <BaseShimmer class="home-form-heading__title" />
      <BaseShimmer class="home-form-heading__subtitle" />
      <BaseShimmer class="home-form-heading__subtitle" />
    </div>

    <div class="home-form-divider"></div>

    <div class="home-form-container">
      <div class="home-form-input__container home-form-input__container--company-name">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--first-name">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--last-name">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--telephone">
        <BaseInput
          type="tel"
          label="Telehone*"
        />
      </div>

      <div class="home-form-input__container home-form-input__container--email">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--password">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div
        class="home-form-input__container home-form-input__container--password-confirm"
      >
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--terms">
        <BaseShimmer class="home-form-input__label" />
        <BaseShimmer class="home-form-input__input" />
      </div>

      <div class="home-form-input__container home-form-input__container--submit">
        <BaseShimmer class="home-form-input__input" />
      </div>
    </div>
  </BaseCard>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-form {
}

.home-form-heading {
  display: flex;
  flex-direction: column;
  gap: 3px;

  &__title {
    height: 40px;
    width: 200px;
  }

  &__subtitle {
    height: 15px;
    max-width: 350px;
    width: 100%;
  }
}

.home-form-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.home-form-input {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &--company-name,
    &--telephone,
    &--email,
    &--terms,
    &--submit {
      grid-column: span 2 / span 2;
    }

    &--submit {
      align-items: flex-end;
    }
  }

  &__label {
    height: 8px;
    width: 100px;

    .form-input__container--terms & {
      height: 13px;
      width: 13px;
    }
  }

  &__input {
    height: 35px;
    width: 100%;

    .form-input__container--terms & {
      height: 13px;
      width: 200px;
    }

    .form-input__container--submit & {
      width: 200px;
    }
  }
}

.home-form-divider {
  height: 1px;
  width: 100%;
  background-color: $silver-gray;
  margin: 20px 0;
}
</style>
