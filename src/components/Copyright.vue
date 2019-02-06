<template>
  <div class="copyright">
      <p>All songs come from "freemusicarchive.org," and were made by the group "The inventors"</p>
      <p>All images that aren't our own come from "unsplash.com"</p>
      <p>Icons come from "https://material.io/tools/icons"</p>
  </div>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style>
    .copyright {
        background: black;
        color: white;
        margin: 0;
        padding: 5px;
        padding-top: 10px;
        font-size: 16px;
    }
    .copyright > p {
        margin: 0;
        margin-bottom: 5px;
    }
</style>
