<template>
    <div>
        <NavigationTop class="a-black" />
        <Nuxt />
        <NavigationBottom class="a-black" />
    </div>
</template>

<script>
export default {
  head: {
    link: [
      {rel: 'stylesheet', href: require('~/assets/style/style.css')},
    ]
  },
  mounted() {
    window.addEventListener("resize", this.resizeHandler);
    window.addEventListener("DOMContentLoaded", this.resizeHandler, {
      once: true,
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      this.height = window.innerHeight;
      document.querySelector("body").style.height = this.height + "px";
    },
  },
}
</script>

<style scoped>
.a-black {
  color: #000 !important;
}

.a-black a {
  color: #000 !important;
}
</style>