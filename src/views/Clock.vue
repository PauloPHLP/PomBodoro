<template>
  <div class="clock">
    <header class="title">PomBodoro timer</header>
    <div>clock</div>
    <footer-buttons />
  </div>
</template>

<script>
import FooterButtons from '@/components/FooterButtons.vue';

export default {
  name: 'Clock',
  components: { FooterButtons },
};
</script>

<style scoped lang="scss">
.clock {
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
  font-weight: 600;
  font-size: 32px;
}
</style>
