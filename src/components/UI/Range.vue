<template>
  <div class="range-slider">
    <input class="range-slider__range"
           type="range"
           v-model="rangeValue" :min="min" :max="max">
    <span class="range-slider__value">{{rangeValue}}</span>
  </div>
</template>

<script>
export default {
  name: 'Range',
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 20
    },
    value: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      rangeValue: 0
    }
  },
  mounted() {
    this.rangeValue = this.value;
  }
}
</script>

<style lang="scss">
@import "../../styles/_range_slider.scss";
</style>
