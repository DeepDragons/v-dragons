<template>
  <footer class="font-small bg-darkviolet">

    <div class="container text-center text-md-left py-3">

      <div class="row pt-3">
        <div class="col-lg mx-auto text-center">
          <a class="col-xs logo_text p-3">
              <img src="/img/logo_img.png" height="50">
            Dragon {{$store.getters.CURRENCY}}
          </a>
          <ul class="list-inline">
            <li class="list-inline-item pl-3">
              <a href="https://t.me/joinchat/DEnpkgr31xVjG4io-wmwLQ"
                 class="links-item"
                 target="_blank">
                Ask a question
              </a>
            </li>
            <li class="list-inline-item pl-3">
              <a href="#contracts" @click="modalShow = !modalShow"
                 class="links-item">Contracts</a>
            </li>
            <li class="list-inline-item pl-3">
              <a href="https://dragoneth.com/privacy"
                 class="links-item"
                 target="_blank">
                Privacy policy
              </a>
            </li>
            <li class="list-inline-item pl-3">
              <a href="https://dragoneth.com/terms"
                 class="links-item"
                 target="_blank">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row pt-3">
        <div class="col-xs mx-auto">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/ethdragons"
                 class="links-item facebook socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/dragons_eth"
                 class="links-item twitter socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.reddit.com/r/DragonsEth/"
                 class="links-item reddit socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="https://medium.com/@dragons_eth"
                 class="links-item medium socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/DeepDragons"
                 class="links-item gitlab socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="https://discord.gg/kHMxad4"
                 class="links-item dicord socials"
                 target="_blank"></a>
            </li>
            <li class="list-inline-item">
              <a href="tg://join?invite=DEnpkgr31xVjG4io-wmwLQ"
                 class="links-item telegram socials"
                 target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-3 text-center text-lightgray">
      © Dragon{{$store.getters.CURRENCY}} 2018
    </div>

    <b-modal v-model="modalShow"
         hide-footer
         :title="title"
         :header-bg-variant="headerBgVariant"
         :header-text-variant="headerTextVariant"
         :body-bg-variant="bodyBgVariant">

      <ul class="list-inline">
        <li v-for="key of Object.keys(items)" :key="key"
            class="row list-inline-item pl-5">
          <a class="links-item col pl-5"
             :href="viewAddressUrl(items[key])"
             target="_blanck">{{key}} => view on etherscan</a>
        </li>
      </ul>
  
      <button v-btn="'lightviolet col-xs-12 p-2'"
              @click="modalShow = !modalShow">CLOSE</button>
      
    </b-modal>
  </footer>
</template>
blockExplorer
<script>
import btn from '../../directives/btn'
import DragonActions from '../../mixins/dragonActions'
import UtilsMixin from '../../mixins/utils'

const contracts = window.contracts;


export default {
  name: 'Footer',
  directives: { btn },
  mixins: [DragonActions, UtilsMixin],
  data() {
    return {
      modalShow: false,
      title: 'Contracts'
    }
  },
  computed: {
    items() {
      return contracts;
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/colors";

.links-item {
  color: $white;
  font-family: 'Open Sans',sans-serif;
  text-decoration: none;
}

.links-item:hover {
    color: $pink;
    text-decoration: underline;
    text-shadow: 0 0 11px $lightping;
}
.socials:hover {
  filter: grayscale(0);
}

.facebook {
  background-position: 4px -42px;
}
.twitter {
  background-position: -36px -42px;
}
.reddit {
  background-position: -76px -42px;
}
.medium {
  background-position: -116px -42px;
}
.gitlab {
  background-position: -158px -42px;
}
.dicord {
  background-position: -197px -42px;
}
.telegram {
  background-position: -236px -42px;
}
.socials {
  width: 35px;
  height: 35px;
  max-width: 100%;
  display: inline-block;
  background-size: 268px;
  background-repeat: no-repeat;
  background-image: url("/img/social_sprite.png");
  filter: grayscale(100%);
}

</style>
