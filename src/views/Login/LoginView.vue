<template>
  <div>
    <navbar /> 
    <Logo /> 
    <p><Button> 로그인 </Button></p>
    LoginView! 
  </div>
</template>
<script>
import Navbar from '@/components/nav/Navbar'; 
import Logo from '@/components/common/Logo'; 

export default {
  name: 'LoginView', 
  components : { 
    Navbar, 
    Logo
  }
}
</script>
