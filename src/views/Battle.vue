<template>
  <div>
    <div class="row fixed-top">
      <img src="/img/bc_cloud_left.png" class="col-auto mr-auto">
      <img src="/img/bc_cloud_right.png" class="col-auto">
    </div>
    <div class="d-flex justify-content-between">
      <img :src="url" class="">
      <img :src="url" class="flip">
    </div>
  </div>
</template>

<script>
import DefUtils from '../mixins/utils'


export default {
  name: 'Battle',
    mixins: [DefUtils],
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    },
    url() {
      return this.getUrl(2, this.id);
    }
  }
}
</script>

<style lang="scss">
.fixed-top {
  z-index: -1;
}
img.flip {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
