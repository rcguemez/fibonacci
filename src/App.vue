<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <b-container>
      <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        <p>For more information visit our website</p>
        <b-btn variant="primary" href="https://bootstrap-vue.org/">More Info</b-btn>
      </b-jumbotron>

      <b-form-group
        horizontal
        :label-cols="4"
        description="Let us know your name."
        label="Enter your name"
      >
        <b-form-input v-model.trim="name"></b-form-input>
      </b-form-group>

      <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
    </b-container> -->
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    AppHeader, AppFooter,
  },
  data() {
    return {
      name: ''
    }
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false
    }
  }
}
</script>

<style>
</style>
