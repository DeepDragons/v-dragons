<template>
  <footer class="page-footer font-small indigo bg-darkviolet">

    <div class="container text-center text-md-left pt-5">

      <div class="row">

        <div class="col-md-2 mx-auto">

          <ul class="list-unstyled">
            <li>
              <a href="https://dragoneth.com/privacy" class="links-item">Privacy Policy</a>
            </li>
            <li>
              <a href="https://dragoneth.com/terms" class="links-item">Terms of Service</a>
            </li>
          </ul>

        </div>

        <hr class="clearfix w-100 d-md-none">

        <div class="col-md-1 mx-auto">

          <ul class="list-unstyled">
            <li>
              <a class="links-item" target="_blanck" href="tg://join?invite=DEnpkgr31xVjG4io-wmwLQ">Telegram</a>
            </li>
            <li>
              <a class="links-item" target="_blanck" href="https://www.facebook.com/ethdragons">Facebook</a>
            </li>
            <li>
              <a class="links-item" target="_blanck" href="https://www.reddit.com/r/DragonsEth">Reddit</a>
            </li>
            <li>
              <a class="links-item" target="_blanck" href="https://twitter.com/dragons_eth">Twitter</a>
            </li>
            <li>
                <a class="links-item" target="_blanck" href="https://discordapp.com/invite/kHMxad4">Discord</a>
            </li>
            <li>
                <a class="links-item" target="_blanck" href="https://medium.com/@dragons_eth">Medium</a>
            </li>
          </ul>

        </div>

        <hr class="clearfix w-100 d-md-none">

      </div>

    </div>

    <div class="footer-copyright text-center py-3 text-warning">© 2018 Copyright: Dragon{{$store.getters.CURRENCY}}.com</div>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@media screen and (max-width: 1024px) {
  footer {
    margin-top: 20%;
  }
}
</style>
