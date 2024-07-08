<template>
  <ol class="base-steps">
    <li
      v-for="(step, stepKey) in steps"
      :key="stepKey"
      class="base-steps__item"
    >
      <div
        class="base-steps__step-indicator"
        :class="{ 'base-steps__step-indicator--active': stepKey <= currentStep }"
      >
        {{ loading ? '' : stepKey + 1 }}
      </div>

      <BaseShimmer
        v-if="loading"
        style="height: 10px; width: 100px;"
      />

      <template v-else>
        {{ step }}
      </template>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    currentStep: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.base-steps {
  --circle-size: 15px;
  --gap: 50px;

  position: relative;
  display: flex;
  justify-content: space-evenly;
  gap: var(--gap);

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100px;
    position: relative;
    text-align: center;
    gap: 5px;
    flex-grow: 1;
    z-index: 1;

    &:not(:last-child) {
      position: relative;

      ::after {
        content: '';
        position: absolute;
        width: calc(100% - (var(--circle-size) * 2) + var(--gap));
        height: 3px;
        top: calc(var(--circle-size) / 2);
        background: $light-blue;
        transform: translateX(calc(50% + var(--circle-size)));
      }
    }
  }

  &__step-indicator {
    width: var( --circle-size);
    height: var( --circle-size);
    border: 3px solid $light-blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: $light-blue;
    font-size: 12px;
    color: white;

    &--active {
      background: $blue;
      border-color: $blue;
    }
  }
}
</style>