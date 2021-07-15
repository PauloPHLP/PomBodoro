<template>
  <div class="clock">
    <header class="title">PomBodoro timer</header>
    <div>
      <counter />
    </div>
    <footer-buttons />
  </div>
</template>

<script>
import FooterButtons from '@/components/FooterButtons.vue';
import Counter from '@/components/Counter.vue';

export default {
  name: 'Clock',
  components: { FooterButtons, Counter },
};
</script>

<style lang="scss" scoped>
.clock {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2rem 1rem;
  overflow: hidden;
}

.title {
  font-weight: 600;
  font-size: 32px;
}
</style>
