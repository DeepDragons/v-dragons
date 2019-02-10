<template>
  <div class="range-slider">
    <input class="range-slider__range"
           type="range"
           :value="rangeValue"
           @input="rangeValue = $event.target.value"
           :min="min" :max="max">
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
  computed: {
    rangeValue: {
      get: function() {
        return this.$store.getters[this.storeKey].range;
      },
      set: function(value) {
        let payload = this.$store.getters[this.storeKey];
        payload.range = value > this.max ? this.max : value;
        this.$store.commit(this.storeKey, payload);
      }      
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_range_slider.scss";
</style>
