<template>
    <div class="h-100">
        <NavigationTop />
        <Nuxt />
        <NavigationBottom />
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
    window.addEventListener("DOMContentLoaded", this.resizeHandler, {
      once: true,
    });
  },
  methods: {
    resizeHandler() {
      this.height = window.innerHeight;
      document.querySelector("body").style.height = this.height + "px";
    },
  },
}
</script>
