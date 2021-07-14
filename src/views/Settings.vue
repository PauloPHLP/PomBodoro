<template>
  <div class="settings">
    <header class="title">
      <router-link to="/" class="back-button">
        <img src="@/assets/icons/arrow-left.svg" alt="Back button." />
      </router-link>
      <span>Timer settings</span>
    </header>
    <div class="settings-items">
      <settings-item
        v-for="item in settingsList"
        :key="item.id"
        :settings="item"
        :currentSelected="currentSelected"
      />
    </div>
    <div class="control-buttons">
      <button class="control-button cancel">
        Cancel
      </button>
      <button class="control-button save">Save</button>
    </div>
    <footer-buttons />
  </div>
</template>

<script>
import FooterButtons from '@/components/FooterButtons.vue';
import SettingsItem from '@/components/SettingsItem.vue';
import settings from '@/assets/configuration/settings.json';

export default {
  name: 'Settings',
  components: { FooterButtons, SettingsItem },
  data() {
    return {
      settingsList: settings,
      currentSelected: {},
    };
  },
  created() {
    this.getCurrentSettings();
  },
  methods: {
    getCurrentSettings() {
      this.currentSelected = JSON.parse(
        localStorage.getItem('pombodoroSettings'),
      );
    },
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
  overflow: auto;
  position: relative;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 32px;

  .back-button {
    position: absolute;
    left: 0;
    margin-left: 1rem;

    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);

    &:hover {
      cursor: pointer;
      filter: invert(29%) sepia(42%) saturate(3890%) hue-rotate(237deg)
        brightness(100%) contrast(106%);
    }

    @media (max-width: 768px) {
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.settings-items {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1440px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

.control-buttons {
  width: 50rem;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
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
