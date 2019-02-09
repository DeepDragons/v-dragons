<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="btn-group col-lg">
          <button type="button"
                  class="btn btn-outline-info"
                  @click="isGiftModal">GIFT</button>
          <button type="button"
                  class="btn btn-outline-info"
                  @click="toFight">TO FIGHT</button>
          <button type="button"
                  class="btn btn-outline-info"
                  @click="isSellModal">TO SELL</button>
          <button type="button"
                  class="btn btn-outline-danger"
                  @click="isShowSuicide">SUICIDE</button>
        </div>
      </div>
    </div>

    <b-modal v-model="gift.show"
             :title="gift.title"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant"
             :footer-bg-variant="footerBgVariant">
      
      <div class="form-group col-lg">
        <input type="text"
               class="form-control text-ightindigo w-100 p-2"
               v-model="gift.giftAddress">
        <br>
        <small class="form-text text-muted">
          {{$store.getters.CURRENCY}} address
        </small>
      </div>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button type="button"
                class="btn btn-outline-info col-xs-12 p-2"
                @click="makeGift">GIFT</button>
      </div>
    </b-modal>

    <b-modal v-model="sell.show"
             :title="sell.title"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant"
             :footer-bg-variant="footerBgVariant">
      
      <p class="lead text-indigo col-lg">
        Commission for the sale will be
        <span class="text-ightindigo">{{sell.commission}}%</span> 
      </p>

      <div class="form-group col-lg">
        <input type="number"
               class="form-control text-ightindigo w-100 p-2"
               v-model="sell.price">
        <br>
        <small class="form-text text-muted">
          {{$store.getters.CURRENCY}} amount
        </small>
      </div>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button type="button"
                class="btn btn-outline-info col-xs-12 p-2"
                @click="makeSell">TRADE</button>
      </div>
    </b-modal>

    <b-modal v-model="suicide.show"
             :title="suicide.title"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant"
             :footer-bg-variant="footerBgVariant">
      
      <p class="lead text-danger col-lg">
        Are you sure you want to kill a dragon?
      </p>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button type="button"
                class="btn btn-outline-danger col-xs-12 p-2"
                @click="makeSuicide">MAKE IT</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import DragonActions from '../mixins/dragonActions'

export default {
  name: 'ActionPanel',
  mixins: [DragonActions]
}
</script>

<style lang="scss">

</style>
