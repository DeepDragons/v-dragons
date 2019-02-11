<template>
  <div class="container pt-5">

    <h3 class="text-left text-ightindigo">
      Name:
      <input type="text" id="dragon-name"
             disabled
             class="form-control text-pink"
             value="test" v-model.lazy="dragonName">
    </h3>
    <h3 class="text-left text-ightindigo">
      Owner: <span class="text-pink">{{onwer}}</span>
    </h3>
    <h3 class="text-left text-ightindigo pb-5">
      Current action: <span class="text-pink">{{currentAction}}</span>
    </h3>
    
    <div class="row pt-2 pb-2">
      <canvas id="combat"
              width="800" height="300"></canvas>

      <Card class="col-lg selected d-block mx-auto"
            :hover="cardHover"
            :url="url">
        <h2 class="text-pink">
          #{{id}}
        </h2>
      </card>
    </div>

    <ActionPanel v-if="isOwner" :id="id"/>

    <a v-if="!isOwner  && price"
       class="btn btn-outline-info text-info"
       @click="buyFromMarket(id)">
      BUY {{price | fromWei($store.getters.CURRENCY)}}
    </a>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Charts from '../mixins/charts'
import ActionPanel from '../components/ActionPanel'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import DefUtils from '../mixins/utils'
import fromWei from '../filters/fromWei'

export default {
  name: 'Dragon',
  components: { Card, ActionPanel },
  mixins: [Charts, DragonMixin, DefUtils],
    filters: { fromWei },
  data() {
    return {
      cardHover: 'none',
      dragonName: 'no name',
      isOwner: null,
      addressOwner: '',
      stage: null,
      nextBlock2Action: null,
      currentAction: null,
      price: 0
    }
  },
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    },
    url() {
      return this.getUrl(this.stage, this.id);
    },
    onwer() {
      return this.addressOwner;
    }
  },
  mounted() {
    this.preView();
  },
  methods: {
    paintChart(values) {
      let ctx = window.document.getElementById('combat');
      this.createCombatChart(ctx, values);
    },
    subAddress(address) {
      return address.substr(0, 8) + '...';
    },
    async preView() {
      let dragonData;
      let { currentAddress } = this.$store.getters.METAMASK;

      try {
        dragonData = await this.dragonInfo(this.id);
      } catch (err) {
        window.location.reload();
        return null;
      }

      if (dragonData.owner == currentAddress) {
        this.isOwner = true;
        this.addressOwner = 'you';
        document.getElementById('dragon-name').disabled = false;
      } else if (dragonData.owner == this.marketPlace.address) {
        this.addressOwner = await this.marketPlace.dragonsOwner(this.id);
        this.addressOwner = this.subAddress(this.addressOwner);
        this.price = await this.marketPlace.dragonPrices(this.id);
      } else {
        this.addressOwner = this.subAddress(dragonData.owner);
      }

      this.dragonName = dragonData.dragonName || this.dragonName;
      this.stage = dragonData.gens.stage;
      this.nextBlock2Action = dragonData.gens.nextBlock2Action;
      this.currentAction = dragonData.gens.currentAction;

      this.paintChart(dragonData.gens.fightsGenes);
    }
  },
  watch: {
    dragonName(value) {
      console.log('setDragonName', value);
    }
  }
}
</script>

<style lang="scss">
@import "../styles/colors";
#dragon-name {
  background: #2125290c;
  border: #2125290c;
}
#combat {
  position: absolute;
  right: 0;
  z-index: 99;
}

.none {
  animation: shadow 2s infinite alternate;
  border: 2px solid $lightviolet;
  -webkit-box-shadow: 0px 0px 40px $lightviolet;
  box-shadow: 0px 0px 40px $lightviolet;
  cursor: default;
  height: 400px;
  width: 400px;
  img { margin: 4%; }
}

@keyframes shadow {
  from {box-shadow: 0 0 50px 10px $lightviolet}
  to {text-shadow: 0 0 60px 15px $lightping }
}

@media screen and (max-width: 991px) {
  div.selected .none {
      height: 200px;
      width: 200px;
      margin: 35%;
      img { margin: -3%; }
  }
}
@media screen and (max-width: 414px) {
  div.selected .none {
      margin: 20%;
      img { margin: -3%; }
  }
}
@media screen and (max-width: 980px) {
  #combat {
    position: relative;
    left: 0;
  }
}
</style>
