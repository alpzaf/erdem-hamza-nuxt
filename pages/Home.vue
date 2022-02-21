<template>
  <div class="h-100">
    <section
      id="section"
      class="w-100 h-100 position-reletive d-flex justify-content-center align-items-center"
    >
      <NavigationTop />
      <div class="middle-logo">
        <img :src="Logo" alt="" />
      </div>
      <NavigationBottom />
      <!-- BACKGROUND VIDEO -->
      <video
        class="video-bg"
        onload="this.play()"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          src="https://videos.maharethane.com/erdem-hamza-video.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "../assets/img/logo/logo-1.svg";
import NavigationTop from "../components/NavigationTop.vue";
import NavigationBottom from "../components/NavigationBottom.vue";

export default {
  name: "Home",
  components: { NavigationTop, NavigationBottom },
  data() {
    return {
      Logo,
    };
  },
  mounted() {
    document.title = "ERDEM HAMZA";
  },
};
</script>
