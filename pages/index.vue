<template>
  <div class="h-100">
    <section
      id="section"
      class="w-100 h-100 position-relative d-flex justify-content-center align-items-center"
    >
      <div class="middle-logo">
        <BrandLogo class="brand-logo" />
      </div>
      <!-- BACKGROUND VIDEO -->
      <video
        class="video-bg w-100 h-100"
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
      <!--
      <client-only>
        <button class="prev-btn slick-arrow"></button>
        <swiper
          ref="carousel"
          class="swiper"
          :grabCursor="true"
          :options="swiperOptions"
        >
          <swiper-slide v-for="image in sources" :key="image.id" class="position-relative overflow-hidden h-100">
            <div
              :style="{
            backgroundImage: `url(https://www.erdemhamza.com.tr/storage/projects/${image.name})`,
          }"
              class="has-background d-flex align-items-center justify-content-center hv-100"
            ></div>
          </swiper-slide>
        </swiper>
        <button class="next-btn slick-arrow"></button>
      </client-only>
      -->
    </section>
  </div>
</template>

<script>
/* import { directive } from 'vue-awesome-swiper' */

export default {
  /*   directives: {
    swiper: directive
  }, */
  data() {
    return {
    };
  },
  mounted() {
    document.title = "ERDEM HAMZA"
  }
};
</script>

<style scoped>
.video-bg{
  object-fit: cover;
}
.brand-logo{
  width: calc(8rem + 10vw);
}
</style>
