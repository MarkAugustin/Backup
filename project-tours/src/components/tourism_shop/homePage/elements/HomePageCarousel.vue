<template>
  <div>
    <div style="padding-top: 144px; padding-bottom: 126px">
      <img src="@/assets/shop/BestSaleText.svg" />
    </div>
    <carousel style="width: 100%; height: 570px" :perPage="4">
      <slide v-for="(product, product_index) in products" :key="product_index">
        <div class="product-slot">
          <div class="product-image">
            <img :src="product.imag" width="100%" style="border-radius: 16px" />
            <div class="add-to-fav-btn">
                <b-icon-heart
                  class="add-to-fav-icon"
                ></b-icon-heart
              >
            </div>
          </div>
          <div class="product-description">
            <div class="description-left-field">
              <div class="product-name-field">
                <span class="product-name-content">{{ product.name }}</span>
              </div>
              <div class="product-rating-field">
                <b-form-rating
                  id="rating-sm-no-border"
                  :value="product.rating"
                  no-border
                  readonly
                  size="sm"
                  class="product-rating-content"
                ></b-form-rating>
                <div class="product-rating-info">
                  <span>({{ product.stat }})</span>
                </div>
              </div>
              <div class="product-price-field">
                <span class="product-price-content">{{ product.price }}</span>
              </div>
            </div>
            <div class="description-right-field">
              <div class="reviews-info">
                <b-icon-chat-right class="reviews-icon"></b-icon-chat-right>
                <span style="text-decoration: underline"
                  >{{ product.reviews }} reviews</span
                >
              </div>
              <div class="add-to-cart-area">
                <b-button class="add-to-cart-btn">Add to cart</b-button>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import product1 from "@/assets/shop/products/product-1.png";
import product2 from "@/assets/shop/products/product-2.png";
import product3 from "@/assets/shop/products/product-3.png";
import product4 from "@/assets/shop/products/product-4.png";
import product5 from "@/assets/shop/products/product-5.png";

import { BIconChatRight, BIconHeart } from "bootstrap-vue";
export default {
  components: {
    BIconChatRight,
    BIconHeart,
  },
  data() {
    return {
      products: [
        {
          imag: product1,
          name: "Tent",
          rating: 4.7,
          stat: 1357,
          price: "53.79$",
          reviews: 35,
        },
        {
          imag: product2,
          name: "SUP Board",
          rating: 4.7,
          stat: 1543,
          price: "49.69$",
          reviews: 48,
        },
        {
          imag: product3,
          name: "Trekking poles ",
          rating: 4,
          stat: 867,
          price: "31.35$",
          reviews: 28,
        },
        {
          imag: product4,
          name: "Polarized glasses",
          rating: 3.2,
          stat: 758,
          price: "42.98$",
          reviews: 24,
        },
        {
          imag: product5,
          name: "Spray SPF 30+",
          rating: 4.1,
          stat: 531,
          price: "12.60$",
          reviews: 16,
        },
      ],
    };
  },
};
</script>

<style>
.VueCarousel-slide {
  flex-basis: unset !important;
  width: 25%;
}
.product-slot {
  padding-left: 4%;
  padding-right: 4%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.product-image {
  height: 362px;
  width: 100%;
  align-self: center;
}
.add-to-fav-btn {
  position: relative;
  top: -90%;
  left: 39%;
}
.add-to-fav-icon {
  color: #656565;
  font-size: 30px;
  transition: transform 0.3s ease;
}
.add-to-fav-icon:hover {
  transform: scale(1.2);
}
.product-description {
  height: 138px;
  display: flex;
}
.description-left-field {
  width: 65%;
  height: 100%;
}
.product-name-field {
  padding-left: 10px;
  padding-top: 24px;
  width: 100%;
  display: flex;
}
.product-name-content {
  color: #002886;
  font-size: 24px;
}
.product-rating-field {
  padding-top: 5px;
  display: flex;
  align-items: center;
}
.product-rating-content {
  color: #002886;
  width: 60%;
  padding: 0px 0px 0px 3px;
}
.product-rating-info {
  display: flex;
  width: 40%;
  color: #656565;
}
.product-price-field {
  padding-top: 7px;
  padding-left: 10px;
  display: flex;
}
.product-price-content {
  color: #002886;
  font-size: 24px;
}
.description-right-field {
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.reviews-info {
  display: flex;
  padding-top: 30px;
  color: #656565;
  justify-content: space-evenly;
  align-items: center;
}
.add-to-cart-btn {
  border-radius: 20px;
  border: 1px solid var(--dark-blue, #002886);
  background: #fff;
  color: #002886;
}
.add-to-cart-btn:hover {
  border-radius: 20px;
  border: 1px solid var(--dark-blue, #002886);
  background: #002886;
  color: #ffffff;
}
.add-to-cart-btn:not(:disabled):not(.disabled):active,
.show > .add-to-cart-btn.dropdown-toggle {
  background-color: #63acff;
  border-color: #63acff;
  color: rgb(255, 255, 255);
}
</style>
