import FightPlace from '../fightPlace'


export default {
  computed: {
    fightPlace() {
      let web3 = this.$store.getters.WEB3;
      return new FightPlace(web3);
    }
  },
  methods: {
    async getDragonsTofight() {
      let payload = this.$store.getters.FIGHTINGGROUND;
      payload.elements = await this.fightPlace.getAllDragonsFight();

      payload.elements = payload.elements.map(el => {
        return {
          stage: 2,
          id: el.toString(),
          owner: '',
          price: 0
        }
      });
      
      this.$store.commit('FIGHTINGGROUND', payload);

      return payload.elements;
    },
  }
}
