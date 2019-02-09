<template>
  <div class="container pt-5 px-lg-12">
    <div class="row">

      <div class="col col-md eggglow">
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
            <span class="text-ightindigo">0.01064</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
          <p class="lead text-indigo">
            Price of next egg:
            <span class="text-ightindigo">0.01068</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
          <p class="text-indigo">
            The cost of each new egg will be increased by: 
            <span class="text-ightindigo">{{values.buyCost | symbol}}</span>
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </p>
        </div>

        <hr class="my-4 bg-lightviolet">

        <div class="p-3">
          <h3 class="text-pink">
            Current Price: 
            <span class="text-ightindigo">{{values.currentPrice | symbol}}</span> 
            <span class="text-warning"> {{$store.getters.CURRENCY}}</span>
          </h3>
          
          <Range :storeKey="storeKey"/>
        </div>

        <div class="row p-3">
          <div class="form-group col-lg">
            <input :value="values.range"
                   @change="eggAmountUpdate"
                   type="text"
                   class="form-control text-ightindigo p-1">
            <br>
            <small class="form-text text-muted">Number of eggs</small>
          </div>
          <div class="col"></div>
          <div class="form-group col-lg">
            <input type="number" class="form-control text-ightindigo p-1">
            <br>
            <small class="form-text text-muted">Price</small>
          </div>
        </div>

        <div class="row">
          <div class="col"></div>
          <button type="button"
                class="btn btn-outline-warning col-lg btn-buy">
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
import Range from '../components/UI/Range'
import SwitchMT from '../components/UI/SwitchMT'

export default {
  name: 'BuyEgg',
  components: { Range, SwitchMT },
  data() {
    return {
      switchTitle: 'Guarantee my order.',
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
div.eggglow {
  margin-top: 10%;
  margin-bottom: 30%;
}
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
  box-shadow: 0 0 60px 30px #212529,
              0 0 100px 60px #212529,
              0 0 100px 80px #8c76d8;
  img {
    margin: -260%;
  }
}
</style>
