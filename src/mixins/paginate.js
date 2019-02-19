import UtilsMixin from './utils'


export default {
  mixin: [UtilsMixin],
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
        let { currentPage } = this.$store.getters[this.storeKey];
        
        if (currentPage > this.totalRows) {
          return this.totalRows;
        } else {
          return currentPage;
        }
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
      let tokensOwner = this.sortElements();
      let count = tokensOwner.length;

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