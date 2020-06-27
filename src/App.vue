<template>
  <div id="app">
    <router-view></router-view>
    </div>
</template>



<script>
import HomeBaseHotCompany from '@/components/HomeBaseHotCompany.vue';
import HomeBaseHotOption from '@/components/HomeBaseHotOption.vue';
export default {
  name: 'app',
  components:{
      HomeBaseHotCompany,
      HomeBaseHotOption
  }
}
</script>

