<template>
  <div class="container pt-5 px-lg-12">
    <div class="row justify-content-md-center m-auto">

      <div class="col eggglow">
        <div class="glow">
          <img src="/img/buy-egg-q.png"
               class="rounded float-left">   
        </div>  
      </div>

      <div class="jumbotron col-lg">
        <h2 class="text-warning text-center">
          {{values.eggsSold}} <span class="text-lightviolet">EGGS SOLD</span>
        </h2>
        <hr class="my-4 bg-lightviolet">
        <div class="p-3">
          <h3 class="text-pink">Price</h3>
          <p class="lead text-indigo">
            Price of last egg: 
            <span class="text-ightindigo">{{last | fromWei}}</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
          <p class="lead text-indigo">
            Price of next egg:
            <span class="text-ightindigo">{{next | fromWei}}</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
          <p class="text-indigo">
            The cost of each new egg will be increased by: 
            <span class="text-ightindigo">{{values.buyCost | fromWei}}</span>
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
        </div>

        <hr class="my-4 bg-lightviolet">

        <div class="p-3">
          <h3 class="text-pink">
            Current Price: 
            <span class="text-ightindigo">{{values.currentPrice | fromWei}}</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </h3>
          
          <Range :storeKey="storeKey"/>
        </div>

        <div class="row p-3">
          <div class="form-group col-lg">
            <input v-model.lazy="tokenAmount"
                   type="number"
                   :max="maxEgg"
                   class="form-control text-ightindigo p-1">
            <br>
            <small class="form-text text-muted">Number of eggs</small>
          </div>
          <div class="col"></div>
          <div class="form-group col-lg">
            <input v-model.lazy="priceAmount"
                   :step="values.currentPrice | fromWei"
                   type="number"
                   class="form-control text-ightindigo p-1">
            <br>
            <small class="form-text text-muted">Price</small>
          </div>
        </div>

        <div class="row">
          <div class="col"></div>
          <button v-btn="'success col-lg btn-buy'"
                  @click="$store.dispatch('buyEgg')">
            BUY
          </button>
          <div class="col"></div>
        </div>
        
        <SwitchMT :isCheck="values.isCheck"
                  :storeKey="storeKey"
                  :title="switchTitle"/>

        <p class="text-indigo">
          We will increase the amount of {{$store.getters.CURRENCY}} you send by 0.0001 ETH to ensure your order in case if somebody will buy an egg before you do. All unused {{$store.getters.CURRENCY}} will return to your wallet.
        </p>

      </div>

    </div>
  </div>
</template>

<script>
import { toBigNumber, toWei } from 'web3/lib/utils/utils'
import Crowdsale from '../mixins/ETH/mixins/crowdsale'
import fromWei from '../filters/fromWei'
import btn from '../directives/btn'
import DefUtils from '../mixins/utils'

const Range = () => import('../components/UI/Range')
const SwitchMT = () => import('../components/UI/SwitchMT')


export default {
  name: 'BuyEgg',
  components: { Range, SwitchMT },
  mixins: [Crowdsale, DefUtils],
  filters: { fromWei },
  directives: { btn },
  data() {
    return {
      switchTitle: 'Guarantee my order.',
      storeKey: 'BUYFORM',
      maxEgg: 15
    }
  },
  computed: {
    values() {
      return this.$store.getters[this.storeKey];
    },
    last() {
      let payload = this.$store.getters[this.storeKey];
      let currentPrice = toBigNumber(payload.currentPrice);
      let buyCost = toBigNumber(payload.buyCost);
      
      return currentPrice.sub(buyCost).toString();
    },
    next() {
      let payload = this.$store.getters[this.storeKey];
      let currentPrice = toBigNumber(payload.currentPrice);
      let buyCost = toBigNumber(payload.buyCost);
      
      return currentPrice.add(buyCost).toString();
    },
    tokenAmount: {
      get: function() {
        return this.values.range;
      },
      set: function(value) {
        let payload = this.values;
        
        value = (+value).toFixed();
        value = +value;

        if (value > this.maxEgg) {
          value = this.maxEgg;
        } else if (value < 1) {
          value = 1;
        }

        payload.range = value;

        this.$store.commit(this.storeKey, payload);
      }
    },
    priceAmount: {
      get: function() {
        let price;
        let payload = this.values;
        let buyCost = toBigNumber(payload.buyCost);
        let currentPrice = toBigNumber(payload.currentPrice);

        if (payload.isCheck) {
          currentPrice = currentPrice.add(buyCost);
        }

        price = currentPrice.mul(payload.range);

        return fromWei(price);
      },
      set: function(value) {
        let tokenAmount;
        let currentPrice = toBigNumber(this.values.currentPrice);

        value = toWei(value);
        value = toBigNumber(value);
        tokenAmount = value.div(currentPrice);
        tokenAmount = tokenAmount.toString();

        this.tokenAmount = tokenAmount;
      }
    }
  },
  mounted() {
    this.commonUpdate();
  }
}
</script>

<style lang="scss">
@import "../styles/colors";

div.eggglow {
  margin-top: 10%;
  margin-bottom: 30%;
}
button.btn-buy {
  min-width: 200px;
  margin-bottom: 3%;
}

.glow  {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin: 22%;
  box-shadow: inset
              $lightviolet
              0 0 100px 50px,
              $lightviolet-1 0 0 200px 100px;
  img {
    margin: -260%;
  }
}

</style>
