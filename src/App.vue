<template>
  <Navbar />
  <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
body{
  margin: 0px;
}
</style>
