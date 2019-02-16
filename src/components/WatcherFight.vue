<template>
  <div>
    <b-table class="text-ightindigo text-center col"
             :fields="watcherFight.fields"
             :items="items"/>
  </div>
</template>

<script>
import TableMixin from '../mixins/table'
import bTable from 'bootstrap-vue/es/components/table/table';

export default {
  name: 'WatcherFight',
  components: { bTable },
  mixins: [TableMixin],
  computed: {
    items() {
      let { items } = this.$store.getters.BATTLE;
      return items.reverse();
    }
  }
}
</script>

<style lang="scss">

</style>
