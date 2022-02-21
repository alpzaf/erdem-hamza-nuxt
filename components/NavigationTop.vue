<template>
  <div
    class="top-bar d-flex justify-content-between w-100 px-4 py-4 px-lg-5 py-lg-5"
  >
    <div class="logo-holder">
      <!-- <img src="img/logo/logo-2.svg" class="logo-top" alt="Erdem Hamza Architect + Interior"> -->
      <router-link to="/" class="text-white d-block responsive-fs mg-n10">
        <div>
          <h1 class="line-height-5 responsive-fs">ERDEM HAMZA</h1>
          <h1 class="line-height-5 responsive-fs">ARCHITECT +</h1>
          <h1 class="line-height-5 responsive-fs">INTERIOR</h1>
        </div>
      </router-link>
    </div>
    <div class="projects">
      <router-link
        to="/projects"
        class="text-white text-right d-block responsive-fs line-height-5 mg-n10"
        >PROJECTS</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationTop",
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

.mg-n10 {
  margin-bottom: -10px;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}
</style>
