import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import SwiperClass from 'swiper'

Vue.use(VueAwesomeSwiper)
SwiperClass.use({
  on: {
    progress() {
      const swiper = this;
      const interleaveOffset = 0.5
      for (let i = 0; i < swiper.slides.length; i++) {
        const slideProgress = swiper.slides[i].progress;
        const innerOffset = swiper.width * interleaveOffset;
        const innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".has-background").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
      console.log(this)
    },
    touchStart() {
      const swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition(speed) {
      const swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".has-background").style.transition =
          speed + "ms";
      }
    }
  }
})

/* var swiper = new Swiper(".swiper-container", swiperOptions); */
