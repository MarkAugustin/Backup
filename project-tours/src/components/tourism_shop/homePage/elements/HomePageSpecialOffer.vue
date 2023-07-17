<template>
  <div class="special-offers">
    <img
      src="@/assets/shop/specialOffers/SpecialOffersBackground.png"
      class="special-offers-bg"
    />
    <div class="special-offers-container">
      <div class="special-offers-head">
        <h1 class="s-o-head-text">Special Offer</h1>
        <span class="s-o-head-desc"
          >Buy one product and get the second one with discount. Only at hiking
          and surfing equipment!</span
        >
      </div>
      <div class="special-offers-content">
        <div class="offer">
          <img src="@/assets/shop/specialOffers/Offer1.png" class="offer-img" />
          <div class="offer-info">
            <h1 class="offer-head">Hiking Equipment</h1>
            <b-badge class="offer-badge">40% SALE</b-badge>
            <a href="#" class="offer-link"
              >Explore items <b-icon-arrow-right></b-icon-arrow-right
            ></a>
          </div>
        </div>
        <div class="offer">
          <img src="@/assets/shop/specialOffers/Offer2.png" class="offer-img" />
          <div class="offer-info">
            <h1 class="offer-head">Surfing Equipment</h1>
            <b-badge class="offer-badge">40% SALE</b-badge>
            <a href="#" class="offer-link"
              >Explore items <b-icon-arrow-right></b-icon-arrow-right
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconArrowRight } from "bootstrap-vue";
export default {
  components: {
    BIconArrowRight,
  },
};
</script>

<style>
.special-offers {
  height: 892px;
}
.special-offers-bg {
  width: 100%;
  position: absolute;
  left: 0%;
  z-index: -1;
}
.special-offers-container {
  padding: 88px 165px;
}
.special-offers-head {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s-o-head-text {
  color: #002886;
  font-size: 72px;
  margin-bottom: 16px;
}
.s-o-head-desc {
  display: flex;
  width: 40%;
  color: #238aff;
  font-size: 20px;
}
.special-offers-content {
  padding-top: 108px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.offer {
  position: relative;
  width: 465px;
  height: 465px;
}
.offer-img {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 465px;
  height: 465px;
}
.offer-info {
  position: absolute;
  bottom: 20px;
  left: 18px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
}
.offer-head {
  text-align: start;
  width: 50%;
  display: flex;
  margin-bottom: 8px;
}
.offer-badge {
  border-radius: 500px;
  background: #238aff;
  width: 100px;
  height: 30px;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 16px;
}
.offer-link {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 18px;
  color: white;
  text-decoration: none;
}
.offer-link:hover {
  text-decoration: underline;
}
</style>
