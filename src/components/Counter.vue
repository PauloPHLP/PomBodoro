<template>
  <div class="container">
    <div class="progress-circle" :data-progress="dataProgress">
      <div class="circle">
        <div class="full progress-circle__slice">
          <div class="progress-circle__fill" />
        </div>
        <div class="progress-circle__slice">
          <div class="progress-circle__fill" />
          <div class="progress-circle__fill progress-circle__bar" />
        </div>
      </div>
      <div class="progress-circle__overlay">
        05:42
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      dataProgress: 0,
    };
  },
  created() {
    this.fillProgressBar();
  },
  methods: {
    fillProgressBar() {
      setTimeout(() => {
        this.dataProgress = 75;
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$circle-size: 25rem;
$inset-size: 19rem;
$transition-length: 1s;
$circle-background: #272542;
$circle-color: #2f2f4c;
$inset-color: #232330;

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.progress-circle__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.progress-circle {
  height: $circle-size;
  width: $circle-size;
  margin: 20px auto;
  border-radius: 50%;
  background-color: $circle-background;

  .progress-circle__slice,
  .progress-circle__fill {
    height: $circle-size;
    width: $circle-size;
    position: absolute;
    transition: transform $transition-length;
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
  }

  .progress-circle__slice {
    clip: rect(0px, $circle-size, $circle-size, math.div($circle-size, 2));

    .progress-circle__fill {
      clip: rect(0px, math.div($circle-size, 2), $circle-size, 0px);
      background-color: $circle-color;
    }
  }

  .progress-circle__overlay {
    height: $inset-size;
    width: $inset-size;
    position: absolute;
    margin-left: math.div(($circle-size - $inset-size), 2);
    margin-top: math.div(($circle-size - $inset-size), 2);
    border-radius: 50%;
    background-color: $inset-color;
  }

  $interator: 0;
  $increment: math.div(180deg, 100);

  @while $interator <= 100 {
    &[data-progress='#{$interator}'] {
      .progress-circle__slice.full,
      .progress-circle__fill {
        transform: rotate($increment * $interator);
      }

      .progress-circle__fill.progress-circle__bar {
        transform: rotate($increment * $interator * 2);
      }

      $interator: $interator + 1;
    }
  }
}
</style>
