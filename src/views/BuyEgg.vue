<template>
  <div class="container pt-5">
    <div class="row">

      <div class="col-md">
        <div class="glow">
          <img src="/img/buy-egg-q.png"
               class="rounded float-left">   
        </div>     
      </div>

      <div class="jumbotron col-lg">
        <h2 class="text-lightviolet text-center">
          {{values.eggsSold}} <span class="text-warning">EGGS SOLD</span>
        </h2>
        <hr class="my-4 bg-lightviolet">
        <div class="p-3">
          <h3 class="text-pink">Price</h3>
          <p class="lead text-indigo">
            Price of last egg: 
            <span class="text-ightindigo">0.01064</span> 
            <span class="text-warning"> {{currency}}</span>
          </p>
          <p class="lead text-indigo">
            Price of next egg:
            <span class="text-ightindigo">0.01068</span> 
            <span class="text-warning"> {{currency}}</span>
          </p>
          <p class="text-indigo">
            The cost of each new egg will be increased by: 
            <span class="text-ightindigo">{{values.buyCost}}</span> 
            <span class="text-warning"> {{currency}}</span>
          </p>
        </div>

        <hr class="my-4 bg-lightviolet">

        <div class="p-3">
          <h3 class="text-pink">
            Current Price: 
            <span class="text-ightindigo">{{values.currentPrice}}</span> 
            <span class="text-warning"> {{currency}}</span>
          </h3>
          
          <Range :storeKey="storeKey"/>
        </div>

        <div class="row p-3">
          <div class="form-group col">
            <input :value="values.range"
                   @change="eggAmountUpdate"
                   type="text"
                   class="form-control text-ightindigo p-1">
            <br>
            <small id="emailHelp" class="form-text text-muted">Number of eggs:</small>
          </div>
          <div class="col"></div>
          <div class="form-group col">
            <input type="number" class="form-control text-ightindigo p-1">
            <br>
            <small id="emailHelp" class="form-text text-muted">Price:</small>
          </div>
        </div>

        <div class="row">
          <div class="col"></div>
          <button type="button"
                class="btn btn-outline-warning col btn-buy">
            BUY
          </button>
          <div class="col"></div>
        </div>
        
        <SwitchMT :title="switchTitle"/>

        <p class="text-indigo">
          We will increase the amount of {{currency}} you send by 0.0001 ETH to ensure your order in case if somebody will buy an egg before you do. All unused {{currency}} will return to your wallet.
        </p>

      </div>

    </div>
  </div>
</template>

<script>
import Range from '../components/UI/Range'
import SwitchMT from '../components/UI/SwitchMT'

export default {
  name: 'BuyEgg',
  components: { Range, SwitchMT },
  data() {
    return {
      switchTitle: 'Guarantee my order.',
      currency: 'TRX',
      storeKey: 'BUYFORM'
    }
  },
  computed: {
    values() {
      return this.$store.getters[this.storeKey];
    }
  },
  methods: {
    eggAmountUpdate(el) {
      let newRange = el.target.value;
      let payload = this.$store.getters[this.storeKey];

      payload.range = newRange;
      
      this.$store.commit(this.storeKey, payload);
    }
  }
}
</script>

<style lang="scss">
input {
  background-color: transparent;
  border: 1px solid #8484be;
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
  box-shadow: 0 0 60px 30px #2c3035,
              0 0 100px 60px #3a4149,
              0 0 140px 90px #3d444d;
  img {
    margin: -250%;
  }
}
</style>
