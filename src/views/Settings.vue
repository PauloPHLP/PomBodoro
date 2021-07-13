<template>
  <div class="settings">
    <header class="title">
      <router-link to="/">
        <img
          src="@/assets/icons/arrow-left.svg"
          alt="Back button."
          class="back-button"
        />
      </router-link>
      <span>Timer settings</span>
    </header>
    <div class="settings-items">
      <settings-item
        v-for="item in settingsList"
        :key="item.title"
        :title="item.title"
        :optionsList="item.options"
      />
    </div>
    <div class="control-buttons">
      <button class="control-button cancel">Cancel</button>
      <button class="control-button save">Save</button>
    </div>
    <footer-buttons />
  </div>
</template>

<script>
import FooterButtons from '@/components/FooterButtons.vue';
import SettingsItem from '@/components/SettingsItem.vue';
import settings from '@/assets/configuration/settings';

export default {
  name: 'Settings',
  components: { FooterButtons, SettingsItem },
  data() {
    return {
      settingsList: settings,
    };
  },
};
</script>

<style scoped lang="scss">
.settings {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  padding: 2rem 1rem;
}

.title {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 32px;

  & a {
    height: fit-content;
    margin-right: auto;
  }

  .back-button {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);

    &:hover {
      cursor: pointer;
    }
  }

  & span {
    margin-right: auto;
  }
}

.settings-items {
  max-width: 100%;

  flex: 1;
  overflow: auto;

  margin-top: 3rem;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}

.control-buttons {
  width: 50rem;
  max-width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
}

.control-button {
  height: 3rem;
  width: 100%;

  margin: 0 1rem;

  font-size: 24px;
  background: transparent;
  color: #ffffff;

  border-radius: 4rem;
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.control-button.cancel {
  border: 1px solid #674fff;
}

.control-button.save {
  background-color: #674fff;
}
</style>
