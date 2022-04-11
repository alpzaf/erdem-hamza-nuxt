<template>
  <section id="contact" class="contact w-100 hv-100">
    <div class="row no-gutters w-100 h-100">
      <div class="col-lg-6 h-xs-50 h-md-50 d-flex align-items-center">
        <div
          class="bg-white d-flex flex-wrap align-items-end align-items-sm-center align-items-md-start mt-md-5 w-100"
        >
          <div
            class="col-sm-6 col-lg-12 col-12 w-100 px-5 px-xs-4 px-md-4 px-lg-5 mb-5 mb-xs-1 mb-md-0 mt-md-5"
          >
            <p class="lead">
              ERDEM HAMZA is an interdisciplinary interior architecture office
              based in Istanbul. We see the concepts of art and timelessness as
              a common language in our designs, as we do in many of our
              projects, including residences, workplaces, restaurants, bars...
              <br />
              <br />
              We like to blend elements from different periods in the history of
              architecture and design also we take utmost care to respect the
              "particular" in our designs, right down to the tiniest details of
              the projects, thus bestowing on each a unique and very personal
              character.
              <br />
              <br />
              The spaces we design always try to offer an element of the
              unexpected, while promoting a full sensory experience.
            </p>
          </div>
          <div
            class="col-sm-6 col-lg-12 col-12 d-flex flex-wrap align-items-center px-5 px-xs-4 px-lg-5 px-md-4 mt-md-5 justify-content-between w-100"
          >
            <div
              class="ul-fontsize d-flex flex-wrap justify-content-sm-end justify-content-lg-start justify-content-start mb-0 mb-sm-0 w-100 w-xs-50"
            >
              <a class="h5 d-block w-100" href="mailto:erdem@erdemhamza.com.tr"
                >ERDEM@ERDEMHAMZA.COM.TR</a
              >
              <a class="h5 d-block w-100" href="905324025059"
                >+90 532 402 50 59</a
              >
            </div>
            <div
              class="ul-fontsize mb-0 w-100 w-xs-50 d-flex justify-content-sm-end justify-content-start justify-content-lg-start"
            >
              <address class="h5">
                <a
                  class="d-block md-text-right mb-1"
                  href="https://www.google.com/maps/place/%C3%96mer+Avni,+%C4%B0nebolu+Sk.+No:29,+34427+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.03457,28.990037,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab77bcab06b8d:0x2acdc0862623c6ea!8m2!3d41.03457!4d28.9922257"
                  target="_blank"
                  >İNEBOLU CAD. NO. 29 KABATAŞ</a
                >
                <a
                  class="d-block md-text-right"
                  href="https://www.google.com/maps/place/%C3%96mer+Avni,+%C4%B0nebolu+Sk.+No:29,+34427+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.03457,28.990037,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab77bcab06b8d:0x2acdc0862623c6ea!8m2!3d41.03457!4d28.9922257"
                  target="_blank"
                  >SETÜSTÜ İSTANBUL - TURKEY</a
                >
              </address>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 px-4 pb-5 px-sm-0 pb-sm-0 h-xs-50 h-md-50 w-100 mb-n20"
      >
        <a
          href="https://www.google.com/maps/place/%C3%96mer+Avni,+%C4%B0nebolu+Sk.+No:29,+34427+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.03457,28.990037,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab77bcab06b8d:0x2acdc0862623c6ea!8m2!3d41.03457!4d28.9922257"
          target="_blank"
        >
          <div
            class="has-background bg-map h-100 d-flex justify-content-center align-items-center"
          ></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'contact',
  data() {
    return {
      Map,
    };
  },
  mounted() {
    document.title = "Contact | ERDEM HAMZA";
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  body .lead {
    font-size: 0.5rem !important;
  }
}
@media (min-width: 576px) and (max-width: 769px) {
  .h-md-50 {
    height: 50% !important;
  }
  .text-sm-right {
    text-align: right;
  }
  .ml-sm-auto {
    margin-left: auto;
  }
  .md-text-right {
    text-align: right;
  }
}
.bg-map{
  background-image: url("~assets/images/bg-map2.png");
}
@media (max-width: 1366px) {
  body .lead {
    font-size: 0.85rem;
  }
}
.a-black {
  color: #000 !important;
}

.a-black a {
  color: #000 !important;
}
</style>
