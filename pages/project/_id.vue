<template>
  <section id="section" class="w-100 h-100">
    <client-only>
      <button class="prev-btn slick-arrow"></button>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
      >
        <swiper-slide v-for="image in sources" :key="image.id">
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
    <!-- <carousel v-if="sources.length > 0" :dots="false" :items="1"></carousel> -->
  </section>
</template>

<script>
export default {
  name: 'SwiperNuxt',
  layout: 'projectView',
  data() {
    return {
      title: "",
      projectId: this.$route.params.id,
      sources: {},
      window: Number,
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn'
        }
      }
    };
  },
  async fetch() {
    try {
      const response = await fetch(
        "https://admin.erdemhamza.com.tr/api/projects"
      );
      const data = await response.json();
      if (this.window > 767) {
        this.sources = JSON.parse(
          JSON.stringify(data.data[this.projectId - 2].desktopImages)
        );
      } else {
        this.sources = JSON.parse(
          JSON.stringify(data.data[this.projectId - 2].mobileImages)
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
  fetchOnServer: true,
  mounted() {
    document.title = "Project | ERDEM HAMZA";
    this.window = window.innerWidth
  }
};
</script>

<style>
.hv-100 {
  height: 100vh;
}

.has-background {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 200ms;
}

.has-background::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.25);
}

.has-background a {
  position: relative;
  z-index: 10;
}
</style>
