import FightPlace from '../fightPlace'
import UtilMixin from '../../utils'


export default {
  mixins: [UtilMixin],
  computed: {
    fightPlace() {
      let web3 = this.$store.getters.WEB3;
      return new FightPlace(web3);
    }
  },
  methods: {
    AddElementById(id) {
      if (!id) return null;
      
      return {
        stage: 2,
        id: id.toString(),
        owner: '',
        price: 0
      };
    },
    dragonFightListUpdate(elements) {
      let payload = this.$store.getters.FIGHTINGGROUND;
      payload.elements = elements;
      this.$store.commit('FIGHTINGGROUND', payload);
      return payload.elements;
    },
    async dragonFightListAdd(element) {
      let payload = this.$store.getters.FIGHTINGGROUND;

      if (payload.elements.length < 1) {
        payload.elements = await this.getDragonsTofight();
      }
      
      payload.elements = payload.elements.filter(el => +el.id != +element.id);
      payload.elements.push(element);

      this.$store.commit('FIGHTINGGROUND', payload);
      
      return payload.elements;
    },
    dragonFightListRm(element) {
      if (!element) return null;
       
      let payload = this.$store.getters.FIGHTINGGROUND;
      payload.elements = payload.elements.filter(
        el => +el.id != +element.id
      );
      this.$store.commit('FIGHTINGGROUND', payload);
      return payload.elements;
    },
    async getDragonsTofight() {
      let payload = this.$store.getters.FIGHTINGGROUND;
      payload.elements = await this.fightPlace.getAllDragonsFight();

      payload.elements = payload.elements.map(
        id => this.AddElementById(id)
      );
      
      this.$store.commit('FIGHTINGGROUND', payload);

      return payload.elements;
    },
    battleHistory({ blockNumber, args }) {
      let payload = this.$store.getters.BATTLE;
      let object = {
        ownerWiner: args._ownerWinner,
        ownerLose: args._onwerLoser,
        blockNumber: blockNumber,
        dragonWiner: '#' + args._winnerId.toString(),
        dragonLose: '#' + args._loserId.toString()
      };

      if (payload.items.length > 10) {
        payload.items.shift();
      }

      payload.items.push(object);
      this.$store.commit('BATTLE', payload);

      return payload.items;
    }
  }
}
