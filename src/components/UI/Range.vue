<template>
  <div class="range-slider">
    <input class="range-slider__range"
           type="range" @input="update"
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
      default: 15
    },
    storeKey: String
  },
  data() {
    return {
      rangeValue: 1
    }
  },
  mounted() {
    this.rangeValue = this.$store.getters[this.storeKey].range;
  },
  methods: {
    update() {
      let payload = this.$store.getters[this.storeKey];
      payload.range = this.rangeValue;
      this.$store.commit(this.storeKey, payload);
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_range_slider.scss";
</style>
