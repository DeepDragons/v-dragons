import { fromDecimal, padLeft } from 'web3/lib/utils/utils'

export default {
  data() {
    return {
      stages: {
        0: 'dragon',
        1: 'egg',
        2: 'dragon'
      },
      actions: {
        0: 'free',
        1: 'fight place',
        2: 'random fight',
        3: 'breed market',
        4: 'breed auction',
        5: 'random breed',
        6: 'market place',
        99: 'sleep',
        255: 'Necropolis'
      }
    }
  },
  computed: {
    cloud() {
      return this.$store.getters.CLOUD;
    },
    blockexplorer() {
      return this.$store.getters.BLOCKEXPLORERURL;
    }
  },
  methods: {
    getStage(_stage) {
      /**
       * @param _stage: type number.
       */
      return this.stages[_stage];
    },
    getUrl(_stage, _dragonId) {
      if (!_stage) return null; 
      let stage = this.getStage(_stage);
      return `${this.cloud}${stage}_${_dragonId}.png`;
    },
    sortElements() {
      let { elements } = this.$store.getters[this.storeKey];
      return elements.map(el => {
        return {
          id: el.id,
          url: this.getUrl(el.stage, el.id),
          price: el.price,
          owner: el.owner,
          stage: el.stage
        };
      });
    },
    genParse(_genNumber, _padLeft) {
      /**
       * @param _genNumber: gen in hex or bigNumber.
       * @param _padLeft: number of gens in number.
       * @returns gens in Array type;
       */
      let gens = fromDecimal(_genNumber);

      gens = padLeft(gens, _padLeft);
      gens = gens.split(/(..)/g);
      gens = gens.map(el => parseInt(el, 16));
      gens = gens.filter(el => !isNaN(el));

      return gens;
    },
    viewAddressUrl(address) {
      return `${this.blockexplorer}address/${address}`;
    },
    loaderShow() {
      this.$store.commit('CONTENTSHOW', false);
      window.document
            .getElementById('fountainG')
            .style
            .display = 'block';
    },
    loaderHide() {
      window.document.getElementById('fountainG').style.display = 'none';
      this.$store.commit('CONTENTSHOW', true);
    }
  }
}
