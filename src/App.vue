<template>
  <div id="app">
    <Header :header_home_start=false></Header>
    <Footer></Footer>
  </div>
</template>


<script>
import header from '@/components/common/header'
import footer from '@/components/common/footer'

export default {
  name: 'app',
  components: {
    Header: header,
    Footer: footer
  }
}
</script>

<style>

</style>
