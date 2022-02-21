<template>
  <section id="section" class="w-100 h-100">
    <NavigationProject />
    <!-- <button class="prev-btn slick-arrow"></button> -->
    <carousel v-if="sources.length > 0" :dots="false" :items="1">
      <div v-for="image in sources" :key="image.id">
        <div
          :style="{
            backgroundImage: `url(https://www.erdemhamza.com.tr/storage/projects/${image.name})`,
          }"
          class="has-background d-flex align-items-center justify-content-center hv-100"
        ></div>
      </div>
    </carousel>
    <!-- <button class="next-btn slick-arrow"></button> -->
    <NavigationBottom />
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import NavigationBottom from "../components/NavigationBottom.vue";
import NavigationProject from "../components/NavigationProject.vue";

export default {
  components: { NavigationBottom, NavigationProject, carousel },
  data() {
    return {
      title: "",
      projectId: this.$route.params.id,
      sources: {},
    };
  },
  mounted() {
    document.title = "Project | ERDEM HAMZA";
  },
  async created() {
    try {
      const response = await fetch(
        "https://admin.erdemhamza.com.tr/api/projects"
      );
      const data = await response.json();
      if (window.innerWidth > 767) {
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
};
</script>

<style>
@media (max-width: 576px) {
  .owl-prev,
  .owl-next {
    top: 50% !important;
    width: 40px !important;
    height: 40px !important;
  }
}

.owl-theme .owl-nav {
  margin: 0 !important;
}

.owl-prev,
.owl-next {
  position: absolute;
  color: transparent !important;
  background: transparent !important;
  border-radius: 0 !important;
}

.owl-prev {
  left: 10%;
  transform: rotate(45deg);
}

.owl-next {
  right: 10%;
  transform: rotate(225deg);
}

.owl-prev,
.owl-next {
  top: 43%;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-right: none;
  border-top: none;
  background: transparent;
  z-index: 70;
  width: 120px;
  height: 120px;
}

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
