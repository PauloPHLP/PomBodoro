<template>
  <footer class="bottom-buttons">
    <router-link to="/" exact active-class="active">
      <img
        class="bottom-button"
        src="@/assets/icons/clock.svg"
        alt="Clock button."
      />
    </router-link>
    <router-link to="/settings" exact active-class="active">
      <img
        class="bottom-button"
        src="@/assets/icons/settings.svg"
        alt="Settings button."
      />
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterButtons',
};
</script>

<style lang="scss" scoped>
.bottom-button {
  margin: 0 1rem;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
}

a.active {
  & img {
    filter: none;
  }

  filter: invert(29%) sepia(42%) saturate(3890%) hue-rotate(237deg)
    brightness(100%) contrast(106%);
}
</style>
