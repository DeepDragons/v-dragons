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
    },
    storeKey: String
  },
  data() {
    return {
      isCheckModel: false
    }
  },
  mounted() {
    this.isCheckModel = this.$store.getters[this.storeKey].isCheck;
  },
  watch: {
    isCheckModel(value) {
      let payload = this.$store.getters[this.storeKey];
      payload.isCheck = value;
      this.$store.commit(this.storeKey, payload);
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_material_switch.scss";
</style>
