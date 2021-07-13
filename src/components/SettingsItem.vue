<template>
  <div class="settings-item">
    <span>{{ title }}</span>
    <select>
      <option
        v-for="option in optionsList"
        :key="option.key"
        :value="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SettingsItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    optionsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.settings-item {
  height: 5rem;
  width: 50rem;
  max-width: 100%;

  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0;
  padding: 0 2rem;

  background-color: #2d2c3f;
  border-radius: 2.2rem;

  & select {
    background: transparent;
    border: none;
    color: #ffffff;

    & option {
      color: #1e1b2e;
    }
  }

  & * {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
