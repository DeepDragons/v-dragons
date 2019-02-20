<template>
  <div class="input-group p-3">
    <input v-model="text"
           type="text"
           :placeholder="placeholder"
           class="form-control">
    
    <div v-if="isDrop" class="input-group-append">
      <Dropdown :options="filterValues.options"
                :selected="filterValues.selected"
                :classBtn="dropClass"
                @updateOption="updateOption"/>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  name: 'FilterBy',
  components: { Dropdown },
  props: {
    storeKey: String,
    dropClass: {
      type: String,
      default: 'lightviolet'
    },
    isDrop: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ' Sort by dragon id!'
    }
  },
  data() {
    return {
      text: null
    };
  },
  mounted() {
    this.text = null;
  },
  computed: {
    filterValues() {
      return this.$store.getters[this.storeKey].filter;
    }
  },
  methods: {
    updateOption(selected) {
      let payload = this.$store.getters[this.storeKey];

      payload.filter.selected = selected;

      this.$store.commit(this.storeKey, payload);
    }
  },
  watch: {
    text(value) {
      let payload = this.$store.getters[this.storeKey];

      payload.filter.filterById = value;

      this.$store.commit(this.storeKey, payload);
    }
  }
}
</script>

<style lang="scss">
.form-control, .input-group-append {
  height: 40px;
}
</style>
