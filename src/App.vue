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
  } 
}
</script>



<style lang="scss">
@import "./styles/bootstrap";

a {
  cursor: pointer;
  text-decoration: none;
  color: #8c76d8;
}
a:hover {
  color: #ea77e6;
  text-decoration: underline;
  text-shadow: 0 0 11px #d528d0;
}

* { outline:none; }

.container {
  margin-bottom: 3%;
}
</style>
