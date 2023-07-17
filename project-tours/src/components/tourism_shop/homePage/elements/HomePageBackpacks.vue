<template>
  <div>
    <div class="backpacks">
      <div class="backpacks-container">
        <div style="position: relative">
          <img
            src="@/assets/shop/backpacks/BackpacksBackground.png"
            height="800px"
          />
          <div style="position: absolute; top: 0; left: 60px">
            <div class="backpacks-head">
              <img
                src="@/assets/shop/backpacks/BackpacksHead.png"
                width="100%"
              />
            </div>
            <div class="backpacks-subtitle">
              <span>Ultimate Backpacks For All Enthusiastic Adventurers </span>
            </div>
            <div class="backpacks-info">
              <span
                >This is an upgraded version of the modern mountaineering style
                backpack. Both top and front-loading capabilities makes getting
                to your gear a whole lot easier with a pack of this scale and
                the diaphragm system can separate the top and bottom
                compartments. Compression Straps keeps your gear tight to your
                body and also acts as a mounting system for sleeping pads,
                tents, or even a rifle.</span
              >
            </div>
            <div class="backpacks-btn">
              <b-button class="discover-btn">Discover more</b-button>
            </div>
          </div>
        </div>
        <div class="slider">
          <transition-group name="slide" tag="div">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              :class="{
                'slide-in': activeIndex === index,
                'slide-out': activeIndex !== index,
              }"
              class="slide"
            >
              <img :src="slide" height="800px" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <img
      src="@/assets/shop/backpacks/BackpacksBottomBackground.png"
      width="100%"
    />
  </div>
</template>

<script>
import Slide1 from "@/assets/shop/backpacks/Backpack1.png";
import Slide2 from "@/assets/shop/backpacks/Backpack2.png";
import Slide3 from "@/assets/shop/backpacks/Backpack3.png";
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [Slide1, Slide2, Slide3],
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      }, 10000);
    },
    moveSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
  },
};
</script>

<style>
.backpacks-container {
  width: 100%;
  padding-top: 100px;
  display: flex;
}
.backpacks-head {
  padding-top: 60px;
  width: 428px;
}
.backpacks-subtitle {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: start;
  width: 70%;
  font-size: 32px;
  color: #000000;
}
.backpacks-info {
  width: 83%;
  font-size: 20px;
  color: #000000;
  text-align: start;
}
.backpacks-btn {
  padding-top: 20px;
  display: flex;
  align-content: start;
}
.discover-btn {
    border-radius: 20px;
    background-color: #238AFF;
    border-color: #238AFF;
}
.discover-btn:hover {
    border-radius: 20px;
    background-color: #002886;
    border-color: #002886;
}
.discover-btn:not(:disabled):not(.disabled):active,
.show > .discover-btn.dropdown-toggle {
  background-color: #63ACFF;
  border-color: #63ACFF;
}
.slider {
  background-color: #e5f0ff;
  position: relative;
  right: 0;
  height: 800px;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.slide {
  overflow-y: hidden;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 800px;
  transition: transform 0.5s ease;
}
.slide-in {
  transform: translateX(0);
  animation: slide-in 2s;
}

.slide-out {
  transform: translateX(-100%);
  animation: slide-out 2s;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
