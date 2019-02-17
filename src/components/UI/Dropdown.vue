<template>
  <div class="input-group-append">
    <button v-btn="classBtn + ' dropdown-toggle'"
            @click="toggleMenu">
      {{text}}
    </button>
    <div class="dropdown-menu"
         :class="{show: showMenu}">

      <a v-for="option of options"
         :key="option"
         @click="updateOption(option)"
         class="dropdown-item">{{option}}</a>
    </div>
  </div>
</template>

<script>
import btn from '../../directives/btn'

export default {
  name: 'Dropdown',
  directives: { btn },
  data() {
    return {
      showMenu: false,
      text: ''
    }
  },
  props: {
    // {class, text} //
    options: Array,
    classBtn: String,
    selected: String
  },
  methods: {
    updateOption(option) {
      this.toggleMenu();
      this.text = option;
      this.$emit('updateOption', option);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    this.text = this.selected;
  }
}
</script>

<style lang="scss">
@import "../../styles/colors";

.dropdown-menu {
  position: absolute;
  left: 90%;
  right: 0;
  background: $lightviolet-1;
}
.dropdown-item {
  cursor: pointer;
}
.dropdown-item:hover {
  background: $lightping;
}
</style>
