<template>
  <div class="base-dropdown">
    <div
      ref="dropdownSelector"
      class="base-dropdown__selector"
      @click="toggleDropdown"
    >
      <slot
        name="preview"
        :selected="model"
      ></slot>

      <IconChevronDown class="base-dropdown__icon" />
    </div>

    <portal to="portal-outlet">
      <div
        v-if="dropdownOpen"
        class="base-dropdown__menu"
        :style="{ top: popupPosition.top + 'px', left: popupPosition.left + 'px' }"
      >
        <div
          v-for="(option, optionKey) in options"
          :key="optionKey"
          class="base-dropdown__item"
          @click="selectOption(option)"
        >
          <slot
            name="option"
            :option="option"
          ></slot>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    valueKey: {
      type: String,
      default: 'value'
    }
  },

  data() {
    return {
      dropdownOpen: false,
      popupPosition: { x: 0, y: 0 }
    }
  },

  computed: {
    model: {
      get() {
        return this.options.find(option => option[this.valueKey] === this.value)
      },
      set(val) {
        this.$emit('input', val[this.valueKey])
      }
    },

  },

  methods: {
    selectOption(option) {
      this.model = option
      this.dropdownOpen = false
    },

    positionPopup () {
      this.popupPosition.top = 0;
      this.popupPosition.left = 0

      const element = this.$refs.dropdownSelector;

      if (!element) {
        return
      }

      const rect = element.getBoundingClientRect();

      this.popupPosition.top = rect.top + window.scrollY + rect.height + 5;
      this.popupPosition.left = rect.left + window.scrollX;
    },

    toggleDropdown () {
      this.positionPopup()
      this.dropdownOpen = !this.dropdownOpen
    }
  },
}
</script>

<style lang="scss" scoped>
.base-dropdown {
  &__selector {
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    user-select: none;
  }

  &__icon {
    font-size: 15px;
  }

  &__menu {
    background: white;
    border-radius: 3px;
    position: fixed;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  &__item {
    padding: 7px 5px;
    cursor: pointer;
    color: darken($silver-gray, 40%);
    font-size: 10px;

    &:hover {
      border-radius: 3px;
      background: rgba(0,0,0,0.05);
    }
  }
}
</style>