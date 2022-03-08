<template>
  <div
    class="bottom-bar d-flex justify-content-between w-100 px-4 py-3 px-lg-5 py-lg-4"
  >
    <div>
      <NuxtLink to="/contact" class="text-white responsive-fs"
        >CONTACT</NuxtLink>
    </div>
    <div>
      <a
        href="https://www.instagram.com/erdemhamza/"
        class="text-white responsive-fs"
        target="_blank"
        >INSTAGRAM</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBottom",
  props: {},
};
</script>

<style scoped>
.top-bar,
.bottom-bar {
  position: fixed;
  z-index: 55;
}

.top-bar {
  top: 0;
}

.bottom-bar {
  bottom: 0;
}

.responsive-fs {
  font-size: calc(0.5rem + 2vw);
}

.responsive-fs_project {
  font-size: calc(0.5rem + 1.2vw);
}

.line-height-5 {
  line-height: 0.9;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}
</style>
