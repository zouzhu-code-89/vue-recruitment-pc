<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from '@/components/common/Header';
import FooterComponent from '@/components/common/Footer';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
  #app{
    background-color: #F2F2F5;
  }
</style>
