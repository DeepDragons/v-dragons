<template>
  <div class="modal fade" id="lab-slide-bottom-popup">
    <div class="lab-modal-body">
      <h1>
        Terms and Conditions		</h1>

      <p>LICENSING</p>
      <p>Licenses are valid for one year from the date of purchase. When asking for support with any purchased plugin, you may be asked to provide a valid license key as proof of purchase.</p>
      <p>SOFTWARE UPDATES</p>
      <p>Updates are included for free for one year. If you have a valid and active license key, and your purchased plugin(s) supports it, updates will be delivered automatically from the WordPress dashboard. If your plugin(s) does not support automatic upgrades,
        then updates can be downloaded from your <a href="https://1wd.tv/my-account/" target="_blank">account</a> page.</p>
      <p>SUPPORT SERVICES</p>
      <p>Support for purchased plugins is given up to one year after the purchase date. If you wish to get support after one year, you must purchase a new license key for the plugin you are seeking support for.</p>
      <p>REFUNDS</p>
      <p>I&nbsp;firmly believe in and stand behind my&nbsp;products 100%, but I&nbsp;are understand that no all plugins&nbsp;can&nbsp;work perfectly for everyone all of the time. If you are unhappy with your purchase, or you have an issue that we are unable
        to resolve that makes the system unusable, I&nbsp;am more than happy to provide a complete refund within 30 days of your original purchase.</p>
      <p>A few conditions:</p>
      <ol>
        <li>I&nbsp;cannot provide refunds due to technical issues unless you allow us to adequately try and assist you. If we are unable to resolve the issue for you, I&nbsp;will provide a refund. Please open a support ticket before requesting a refund for
          a technical issue.</li>
        <li>Refunds may only be issued within 30 days of the purchase date. After 30 days no refunds can be processed.</li>
      </ol>
      <div class="text-center">
        <a href="https://1wd.tv/" target="_blank" class="btn-primary btn-plain btn btn-lg popup-button">Visit 1WD.tv!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomModal'
}
</script>

<style lang="scss">
.modal.fade.in .lab-modal-body {
  bottom: 0;
  opacity: 1;
}

.lab-modal-body h1 {
  font-size: 4rem;
}

.lab-modal-body p {
  margin: 0 0 1.62rem 0;
  line-height: 1.62;
  font-weight: 300;
  font-size: 1.62rem;
  color: #666;
}

.lab-modal-body {
  position: relative;
  bottom: -250px;
  margin: 150px auto 0;
  padding: 40px;
  max-width: 60%;
  height: auto;
  background-color: rgb(248, 250, 247);
  border: 1px solid #BEBEBE;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
}

.close {
  margin-top: -20px;
  margin-right: -20px;
  text-shadow: 0 1px 0 #ffffff;
}

.popup-button {
  margin-top: 70px;
}
</style>
