<template>
  <div class="material-switch">
    <input id="someSwitchOptionWarning"
           type="checkbox"
           v-model="isCheckModel"/>
    <label for="someSwitchOptionWarning" class="bg-success"></label>
    <span class="text-indigo">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'SwitchMT',
  props: {
    title: {
      type: String,
      default: ''
    },
    isCheck: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isCheckModel: null
    }
  },
  mounted() {
    this.isCheckModel = this.isCheck;
  }
}
</script>

<style lang="scss">
@import "../../styles/_material_switch.scss";
</style>
