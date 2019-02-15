<template>
  <div class="s-myeggs__item">
    <div class="s-myeggs__circle bg-violet"
         @click="goTo"
         :class="[hover]">
    <img :src="url"
         onerror="this.onerror=null; this.src='https://res.cloudinary.com/dragonseth/image/upload/sub.png'"
         class="s-myeggs__eggpic">
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
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

.s-myeggs__item {
  margin: 10px;
  flex-direction: column;
}
.s-myeggs__circle {
  width: 250px;
  height: 250px;
  // border: 3px solid #382435;
  border-radius: 100%;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
}

.s-myeggs__eggpic {
  position: relative;
  top: 21px;
  left: 22px;
  z-index: 2;
}
.s-myeggs__eggpic img {
  z-index: 2;
  position: relative;
}
img.s-myeggs__eggpic { width: 82%; }

div.card-body {
  text-align: center;
  width: 250px;
  height: 120px;

  h1 {
    color: #382435;
  }
}
</style>
