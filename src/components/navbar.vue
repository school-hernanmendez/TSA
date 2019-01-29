<template v-if="state == 'initial'">
    <div class="navbar">
    </div>
</template>
<template v-else>
    <div>
    </div>
</template>

<script>
export default {
  name: "navbar",
  props: ['state']
};
</script>

<style scoped>
    .navbar {
        position: absolute;
        height: 50px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>
