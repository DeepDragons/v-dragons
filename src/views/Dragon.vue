<template>
  <div class="container pt-5">
    <div class="row">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dragon',
  mounted() {
    console.log(this.id);
  },
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    }
  }
}
</script>

<style lang="scss">

</style>
