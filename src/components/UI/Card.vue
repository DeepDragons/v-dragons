<template>
  <div class="card">
    <div class="card-content bg-violet"
         :class="[classContent]"
         @click="goTo">
      <img :src="url"
          class="card-img-top"
          :height="imgHeight"
          :width="imgWidth"
          onerror="this.onerror=null; this.src='https://res.cloudinary.com/dragonseth/image/upload/sub.png'">
    </div>
    <div class="card-body text-center p-2">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    classContent: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 250
    },
    imgWidth: {
      type: Number,
      default: 250
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
.card {
  flex-direction: column;
}

.card-content {
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  -khtml-border-radius: 100%;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  width: 250px;
  height: 250px;
}

.card-img-top {
  z-index: 2;
}

div.card-body {
  width: 250px;
  height: 120px;
}

</style>
