<template>
  <div class="settings">
    <header class="title">
      <router-link to="/">
        <img src="../assets/icons/arrow-left.svg" alt="Back button." class="back-button">
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
    <footer-buttons/>
  </div>
</template>

<script>
import FooterButtons from '../components/FooterButtons.vue';
import SettingsItem from '../components/SettingsItem.vue';

export default {
	name: 'Settings',
	components: { FooterButtons, SettingsItem },
	data() {
		return {
			settingsList: [
				{
					title: 'Focuse time',
					options: [
						'10 min',
						'15 min',
						'20 min',
						'25 min',
						'30 min',
						'35 min',
						'40 min',
						'45 min',
					],
				},
				{
					title: 'Short break',
					options: [
						'5 min',
						'7 min',
						'10 min',
					],
				},
				{
					title: 'Long break',
					options: [
						'10 min',
						'15 min',
						'20 min',
						'25 min',
						'30 min',
					],
				},
				{
					title: 'Sections',
					options: [
						'2 intervals',
						'3 intervals',
						'4 intervals',
						'5 intervals',
						'6 intervals',
						'7 intervals',
						'8 intervals',
						'9 intervals',
						'10 intervals',
					],
				},
			],
		};
	},
};

</script>

<style scoped lang="scss">

.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 2rem 1rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-weight: 600;
  font-size: 32px;

  & a {
    height: fit-content;
    margin-right: auto;
  }

  .back-button {
    filter:
      invert(100%)
      sepia(100%)
      saturate(0%)
      hue-rotate(288deg)
      brightness(102%)
      contrast(102%);

    &:hover {
      cursor: pointer;
    }
  };

  & span {
    margin-right: auto;
  }
}

.settings-items {
  flex: 1;
  margin-top: 3rem;
  margin-bottom: 1rem;
  overflow: auto;
  max-width: 100%;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}

.control-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50rem;
  max-width: 100%;
  margin-bottom: 3rem;
}

.control-button {
  height: 3rem;
  width: 100%;
  margin: 0 1rem;
  border-radius: 4rem;
  color: #ffffff;
  background: transparent;
  border: none;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.control-button.cancel {
  border: 1px solid #674FFF;
}

.control-button.save {
  background-color: #674FFF;
}

</style>
