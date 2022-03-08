<template>
  <div class="h-100">
    <section
      id="section"
      class="w-100 h-100 position-reletive d-flex justify-content-center align-items-center"
    >
      <div class="middle-logo">

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
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
    };
  },
  head: {
    title: 'ERDEM HAMZA'
  },
};
</script>

<style scoped>
.video-bg{
  object-fit: cover;
}
</style>
