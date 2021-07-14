<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.setSettings();
  },
  methods: {
    setSettings() {
      const settings = localStorage.getItem('pombodoroSettings');

      if (!settings) {
        const newSettings = {
          focusTime: 25,
          shortBreak: 5,
          longBreak: 10,
          sections: 4,
        };

        localStorage.setItem('pombodoroSettings', JSON.stringify(newSettings));
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

* {
  outline: none;
}

*::-moz-focus-inner {
  border: 0;
}

*:focus {
  outline: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: #1e1b2e;
  color: #ffffff;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
