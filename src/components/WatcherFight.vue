<template>
  <div>
    <b-table class="text-ightindigo text-center col"
             :fields="watcherFight.fields"
             :items="items"/>
  </div>
</template>

<script>
import TableMixin from '../mixins/table'
import UtilsMixin from '../mixins/utils'


export default {
  name: 'WatcherFight',
  mixins: [TableMixin, UtilsMixin],
  computed: {
    items() {
      let you = 'you';
      let { currentAddress } = this.$store.getters.METAMASK;
      let { items } = this.$store.getters.BATTLE;

      return items.map(el => {
        if (el.ownerLose == currentAddress) {
          el.ownerLose = you;
        } else {
          el.ownerLose = this.subHex(el.ownerLose);
        }
        if (el.ownerWiner == currentAddress) {
          el.ownerWiner = you;
        } else {
          el.ownerWiner = this.subHex(el.ownerWiner);
        }

        return el;
      }).reverse();
    }
  }
}
</script>

<style lang="scss">

</style>
