<template>
  <div>
    <div class="container">
      <div v-if="iShow" class="row">
        <div class="btn-group col-lg">
          <button v-btn
                  @click="isGiftModal">GIFT</button>
          <button v-if="!isEgg"
                  v-btn
                  @click="toFight">TO FIGHT</button>
          <button v-btn
                  @click="isSellModal">TO SELL</button>
          <router-link v-if="!isEgg && values.currentAction == actions[0]"
                       tag="a"
                       class="btn btn-outline-success"
                       :to="'/lab/' + id">
            GENE LAB
          </router-link>
          <button v-if="!isEgg"
                  v-btn="'danger'"
                  @click="isShowSuicide">SUICIDE</button>
          <button v-if="isEgg"
                  v-btn="'success'"
                  @click="birth">birth</button>
        </div>
      </div>

      <div class="row">
        <button v-if="!values.isOwner && values.currentAction == actions[6]"
                v-btn
                @click="buyFromMarket(id)">
          BUY {{values.price | fromWei($store.getters.CURRENCY)}}
        </button>
        <button v-if="values.isOwner && values.currentAction == actions[99]"
                v-btn="warning"
                @click="wakeUp">
          WAKE UP
        </button>
        <button v-if="values.isOwner && values.currentAction == actions[1]"
                v-btn="warning"
                @click="returnFight">
          RETURN
        </button>
        <button v-if="values.isOwner && values.currentAction == actions[6]"
                v-btn="warning"
                @click="returnMarket">
          RETURN
        </button>
        <router-link v-if="!isEgg && values.currentAction == actions[1]"
                     tag="a"
                     class="btn btn-outline-danger"
                     :to="'/battle/' + id">
            FIGHT WITH
        </router-link>
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
               class="indigo text-ightindigo w-100 p-2"
               v-model="gift.giftAddress">
        <br>
        <small class="form-text text-muted">
          {{$store.getters.CURRENCY}} address
        </small>
      </div>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button v-btn="'info col-xs-12 p-2'"
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
               class="text-ightindigo w-100 p-2 indigo"
               v-model="sell.price">
        <br>
        <small class="form-text text-muted">
          {{$store.getters.CURRENCY}} amount
        </small>
      </div>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button v-btn="'info col-xs-12 p-2'"
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
        <button v-btn="'danger col-xs-12 p-2'"
                @click="makeSuicide">MAKE IT</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import DragonActions from '../mixins/dragonActions'
import DefUtils from '../mixins/utils'
import btn from '../directives/btn'
import fromWei from '../filters/fromWei'


export default {
  name: 'ActionPanel',
  mixins: [DragonActions, DefUtils],
  directives: { btn },
  filters: { fromWei },
  props: { keyStore: String },
  data() {
    return {
      warning: 'warning'
    }
  },
  computed: {
    values() {
      return this.$store.getters[this.keyStore];
    },
    iShow() {
      return this.values.isOwner && 
             this.values.currentAction == this.actions[0];
    },
    isEgg() {
      return this.values.stage == 1; 
    }
  }
}
</script>

<style lang="scss">
@import "../styles/colors";


input.indigo {
  border: 1px solid $lightviolet;
}

div.dnk {
  height: 20px;
  background-position: 0 -120px;
  background-image: url('/img/icons.svg');
  background-repeat: no-repeat;
}
</style>
