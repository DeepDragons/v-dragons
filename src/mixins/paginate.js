export default {
  data() {
    return {
      currentPage: 1,
      totalRows: 100,
      perPage: 10
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