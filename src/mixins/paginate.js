export default {
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      prevText: '<',
      nextText: '>'
    }
  },
  mounted() {
    this.currentPage = this.$store.getters[this.storeKey].currentPage;
  },
  computed: {
    totalRows() {
      let { elements } = this.$store.getters[this.storeKey];
      let count = elements.length / this.perPage;

      count = count.toFixed();

      return +count;
    }
  },
  watch: {
    currentPage() {
      let payload = this.$store.getters[this.storeKey];
      payload.currentPage = this.currentPage;
      this.$store.commit(this.storeKey, payload);
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