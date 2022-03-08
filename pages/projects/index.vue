<template>
  <section class="w-100 h-md-100 h-xs-100 h-100">
    <div class="row no-gutters w-100 h-xs-100 h-md-100 h-100">
      <div
        v-for="a in projects"
        :key="uid(a)"
        class="col-lg-6 col-12 bg-5 layout has-background d-flex justify-content-center align-items-center h-100 h-xs-100 h-md-100"
      >
        <img
          v-if="size"
          :src="`https://www.erdemhamza.com.tr/storage/projects/${a.desktop_picture}`"
          alt=""
          class="img-fluid"
          @load="isloading = false"
        />
        <img
          v-else
          :src="`https://www.erdemhamza.com.tr/storage/projects/${a.mobile_picture}`"
          alt=""
          class="img-fluid"
          @load="isloading = false"
        />
        <div>
          <a class="text-white h4 responsive-fs_project" href="#">{{
            a.name
          }}</a>
        </div>
        <NuxtLink
          :to="{ name: 'project-id', params: { id: a.id }}"
          class="r-links"
        ></NuxtLink>
        <!--
        <Loading
          :active.sync="isloading"
          :blur="blur"
          :is-full-page="fullPage"
        />
        -->
      </div>
    </div>
  </section>

</template>

<script>
export default {
  loading: {
    color: '#000000',
    height: '10px',
    throttle: 0
  },
  data() {
    return {
      projectId: this.$route.params.id,
      projects: [],
      isloading: true,
      fullPage: false,
      blur: "5px",
      items: [],
      size: Boolean
    };
  },
  async fetch() {
    try {
      const response = await fetch(
        "https://admin.erdemhamza.com.tr/api/projects",
        {
          credentials: "same-origin",
        }
      );
      const data = await response.json();
      this.projects = JSON.parse(JSON.stringify(data.data));
    } catch (error) {
      console.log(error);
    }

    this.$nextTick(() => {
      const itemsLength = this.items.length;
      if (this.projects.length % 4 === 3 || this.projects.length % 4 === 1) {
        this.items[itemsLength - 1].classList.add("layout-last");
      } else if (this.projects.length % 4 === 2) {
        this.items[itemsLength - 1].classList.add("layout-divide");
        this.items[itemsLength - 2].classList.add("layout-divide");
      }
    });
  },
  fetchOnServer: true,
  fetchDelay: 200,
  mounted() {
    document.title = "Projects | ERDEM HAMZA";
    window.addEventListener("DOMContentLoaded", this.loaded, {
      once: true,
    });
    document.querySelectorAll(".layout").forEach(item => {
      this.items.push(item)
    });
    this.size = window.innerWidth > 767;
  },
  methods: {
    uid(e) {
      if (e.uid) return e.uid;
      const key = Math.random().toString(16).slice(2);
      this.$set(e, "uid", key);
      return e.uid;
    },
    loaded() {
      this.isloading = false;
    },
  },
};
</script>

<style scoped>
/*
@media (max-width: 576px) {
  .h-xs-auto {
    height: auto !important;
  }
}

@media (min-width: 576px) and (max-width: 1024px) {
  .h-xs-auto {
    height: auto !important;
  }
  .hv-xs-100 {
    height: 100vh !important;
  }
  .h-md-100 {
    height: 100%;
  }
}

@media (min-width: 1025px) {
  .page {
    height: 100% !important;
  }
  .h-md-100 {
    height: 100% !important;
  }
  section {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
}

.layout-1:nth-child() {
  height: 100% !important;
}
*/

/*
.layout-2:nth-child(2n - 3),
.layout-2:nth-child(2n -2) {
  height: 100%;
}
.layout-2:nth-child(3n-3),
.layout-2:nth-child(3n-2),
.layout-2:nth-child(3n-1),
.layout-2:nth-child(3n) {
  height: 50% !important;
}
*/
.row img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
}
.layout:nth-child(6n),
.layout:nth-child(6n -1),
.layout:nth-child(6n -2),
.layout:nth-child(6n -3) {
  height: 50% !important;
}
.layout:nth-child(6n -4),
.layout:nth-child(6n -5) {
  height: 100% !important;
}

section .row .layout-last {
  height: 100% !important;
  width: 100% !important;
  flex: 0 0 100% !important;
  max-width: 100% !important;
}
section .row .layout-divide {
  height: 100% !important;
  flex: 0 0 50% !important;
  max-width: 50% !important;
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.page {
  position: relative;
  display: flex;
  scroll-snap-align: center;
}
html {
  scroll-behavior: smooth;
}
.r-links {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: url("https://demo.maharethane.com/erdem-hamza8/img/view-project-100.png"),
    auto;
}
#__nuxt,
#__layout{
  height: 100%;
}
</style>
