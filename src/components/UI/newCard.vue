<template>
  <div class="card"
       @click="goTo"
       :class="[hover]"
       style="width: 18rem;">
    <img src="..."
         class="card-img-top"
         onerror="this.onerror=null; this.src='https://res.cloudinary.com/dragonseth/image/upload/sub.png'">
    <div class="card-body"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'newCard',
  props: {
    hover: {
      type: String,
      default: 'default'
    },
    url: String,
    paramPath: String
  },
  methods: {
    goTo() {
      if (!this.paramPath) {
        return null;
      }

      this.$router.replace(this.paramPath);
    }
  }
}
</script>

<style lang="scss">

</style>
