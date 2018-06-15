<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
    <b-nav v-for="route in $router.options.routes" :key="route.path" v-if="!route.meta.hidden">
        <b-nav-item v-if="route.path.length === 1" :to="route.path" exact>{{route.meta.name}}</b-nav-item>
        <b-nav-item v-else :to="route.path" >{{route.meta.name}}</b-nav-item>
    </b-nav>
    </b-navbar>
</template>

<script>
    export default {
        name: "NavComponent"
    }
</script>

<style lang="scss" scoped>
$link_text_color: #c8c8c8;
$link_hover_block_color: #6c6969;
$link_active_text_color: #ffffff;
 a{
     color: $link_text_color;
     &.active {
         background: $link_hover_block_color;
         color: $link_active_text_color;
     }
     &:hover {
         color: $link_active_text_color;
     }
 }
</style>