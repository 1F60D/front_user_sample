<template>
  <div class="home">
    This is Home
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/common/HelloWorld.vue'
import '@/assets/scss/test1.scss'; 

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: #000000; 
}
</style>

