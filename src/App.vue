<template>
  <div id="app">
      <nav-component></nav-component>
      <router-view/>
  </div>
</template>

<script>
    import NavComponent from "@/components/NavComponent";
    export default {
        components: {NavComponent}
    }
</script>
<style lang="scss">
</style>
