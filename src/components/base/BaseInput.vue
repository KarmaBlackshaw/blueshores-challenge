<template>
  <label class="base-input">
    {{ label }}

    <div class="base-input__container">
      <BaseDropdown
        v-if="type === 'tel'"
        v-model="flag"
        :options="flags"
      >
        <template #preview="{selected}">
          <div class="base-input__tel-preview">
            <component :is="selected.icon" />
            <span>{{ selected.iso }}</span>
            <span>{{ selected.value }}</span>
          </div>
        </template>

        <template #option="{option}">
          <div class="base-input__tel-preview">
            <component :is="option.icon" />
            <span>{{ option.iso }}</span>
            <span>{{ option.value }}</span>
          </div>
        </template>
      </BaseDropdown>

      <input
        :type="type"
        class="base-input__input"
      >
    </div>
  </label>
</template>

<script>
import IconFlagPh from '@/components/icon/IconFlagPh.vue'
import IconFlagCol from '@/components/icon/IconFlagCol.vue'

const FLAGS = [
  {
    icon: IconFlagPh,
    value: '+63',
    iso: 'PH'
  },
  {
    icon: IconFlagCol,
    value: '+57',
    iso: 'COL'
  }
]

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      flag: FLAGS[0].value
    }
  },

  computed: {
    flags: () => FLAGS
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  font-size: 10px;
  color: darken($silver-gray, 40%);

  &__container {
    border: 1px solid $silver-gray;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
  }

  &__input {
    border: none;
    padding: 10px;
    width: 100%;
    font-size: 12px;
    color: black;

    &:focus, &:active {
      outline: none;
    }
  }

  ::v-deep .base-dropdown__selector {
    height: 100%;
  }
  &__tel-preview {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 5px;
    gap: 5px;
  }
}
</style>