export default {
  data() {
    return {
      currentPage: 1,
      totalRows: 10,
      perPage: 3,
      prevText: '<',
      nextText: '>'
    }
  },
  mounted() {
    this.currentPage = this.$store.getters[this.storeKey].currentPage;
  },
  watch: {
    currentPage() {
      let payload = this.$store.getters[this.storeKey];
      payload.currentPage = this.currentPage;
      this.$store.commit(this.storeKey, payload);
    }
  }
}