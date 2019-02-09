<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar'
import Footer from './components/UI/Footer'

export default {
  components: {
    NavBar,
    Footer
  },
  mounted() {
    this.showApp();
  },
  methods: {
    showApp() {
      window.document
            .getElementById('fountainG')
            .style
            .display = 'none';
      window.document
            .getElementById('app')
            .style
            .display = 'block';
    }
  }
}
</script>



<style lang="scss">
@import "./styles/bootstrap";
@import "./styles/arrow";
a {
  cursor: pointer;
  text-decoration: none;
  color: $lightviolet;
}
a:hover {
  color: $pink;
  text-decoration: none;
  text-shadow: 0 0 11px $lightping;
}

* { outline:none; }

.container {
  margin-bottom: 3%;
}
</style>
