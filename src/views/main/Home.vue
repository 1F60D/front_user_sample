<template>
  <div class="home">
    <HelloWorld msg="1F60D Sample Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/common/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
