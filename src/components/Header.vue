<template>
  <b-navbar type="dark" variant="dark" text-center>
    
    <b-navbar-nav>
      <b-navbar-brand href="/">
        <img class="logo" src="../assets/logo.png" alt="Vue">
      </b-navbar-brand>
      <b-nav-item><router-link to="/" class="nav-link text-white" href="">Fibonacci</router-link></b-nav-item>
      <b-nav-item><router-link to="/covid" class="nav-link text-white" href="">Covid-19</router-link></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
</style>
