<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-sm">
        <img src="/img/buy-egg-q.png"
              class="rounded float-left">
      </div>

      <div class="jumbotron col-lg">
        <h2 class="text-lightviolet text-center">
          33 <span class="text-warning">EGGS SOLD</span>
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
            <span class="text-ightindigo">0.00002</span> 
            <span class="text-warning"> {{currency}}</span>
          </p>
        </div>

        <hr class="my-4 bg-lightviolet">

        <h3 class="text-pink">
          Current Price: 
          <span class="text-ightindigo">0.01066</span> 
          <span class="text-warning"> {{currency}}</span>
        </h3>
        
        <Range/>

        <div class="row p-3">
          <div class="form-group col">
            <input type="number" class="form-control text-ightindigo p-1">
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
      currency: 'TRX'
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
</style>
