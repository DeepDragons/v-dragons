export default {
  data() {
    return {
      perPage: 6,
      prevText: '<',
      nextText: '>'
    }
  },
  mounted() { },
  computed: {
    currentPage: {
      get: function() {
        return this.$store.getters[this.storeKey].currentPage;
      },
      set: function(value) {
        let payload = this.$store.getters[this.storeKey];
        if (payload) {
          payload.currentPage = value;
          this.$store.commit(this.storeKey, payload);
        }
      }
    },
    totalRows() {
      let { elements } = this.$store.getters[this.storeKey];
      let count = elements.length;

      if (count < 1) {
        return null;
      }

      count = count / this.perPage;
      count = Math.ceil(+count);

      return count;
    },
    isShow() {
      let { elements } = this.$store.getters[this.storeKey];
      return elements.length > this.perPage;
    }
  },
  methods: {
    pageChanged(array) {
      const startItem = (this.currentPage - 1) * this.perPage;
      const endItem = this.currentPage * this.perPage;
      return array.slice(startItem, endItem);
    }
  }
}