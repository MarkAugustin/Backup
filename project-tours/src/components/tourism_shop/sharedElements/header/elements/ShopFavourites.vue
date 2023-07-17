<template>
  <div>
    <b-sidebar
      @hidden="hideFav()"
      :visible="isVisible"
      no-header
      right
      backdrop
      shadow
    >
      <div class="sidebar-title">
        <div class="title-icon">
          <BIconHeartFill class="heart-look"></BIconHeartFill>
        </div>
        <div class="title">
          <p class="title-text">Favourites</p>
        </div>
      </div>
      <div class="sidebar-fav-body">
        <ul class="favorites">
          <li class="product" v-for="(product, index) in products" :key="index">
            <div class="product-cart-slot">
              <a :href="product.href">
                <div class="product-img-slot">
                  <img class="product-img" :src="product.imag" />
                </div>
              </a>
              <div class="product-desc">
                <div class="product-name">
                  <a :href="product.href" class="href-custom">
                    {{ product.name }}</a
                  >
                </div>
                <div class="product-price">
                  <span>{{ product.price.toFixed(2) }}$</span>
                </div>
              </div>
              <div class="right-field">
                <div class="move-to-bag">
                  <b-button :id="index" class="bag-button">
                    <BIconBagCheckFill></BIconBagCheckFill>
                  </b-button>
                </div>
                <div class="trash-icon-fav">
                  <b-button id="trash" class="trash-button">
                    <BIconTrash></BIconTrash>
                  </b-button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sidebar-fav-bottom">
        <b-button class="wishlist" href="#">View wishlist</b-button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { BIconHeartFill, BIconTrash, BIconBagCheckFill } from "bootstrap-vue";

export default {
  props: {
    isVisible: {},
  },
  data() {
    return {
      products: [
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "A",
          qty: 3,
          price: 11.99,
        },
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "B",
          qty: 6,
          price: 1.99,
        },
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "C",
          qty: 1,
          price: 20.5,
        },
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "D",
          qty: 1,
          price: 4.99,
        },
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "E",
          qty: 1,
          price: 4.99,
        },
        {
          href: "",
          imag: "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/239/544/fluorescent_pink__47164.1492541091.png?c=2",
          name: "F",
          qty: 45,
          price: 0.99,
        },
      ],
    };
  },
  components: {
    BIconHeartFill,
    BIconTrash,
    BIconBagCheckFill,
  },
  methods: {
    hideFav() {
      this.$emit("hide-fav");
    },
  },
};
</script>

<style>
.heart-look {
  margin-top: 7px;
  margin-left: 8px;
  justify-self: center;
  color: white;
  font-size: 40px;
}
.favorites {
  margin: 0;
  padding: 0 0 15px 0;
  list-style: none;
  height: calc(100vh - 150px);
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  position: relative;
  z-index: 0;
}
.favorites::-webkit-scrollbar {
  width: 0%;
}
.product-price {
  width: 100%;
  height: 50%;
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.trash-icon-fav {
  width: 15%;
  height: 50%;
  margin-left: 35px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.move-to-bag {
  width: 15%;
  height: 50%;
  margin-left: 35px;
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.bag-button {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: gray;
  width: 15px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.bag-button:hover {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(177, 184, 134);
}
.bag-button:not(:disabled):not(.disabled).active,
.bag-button:not(:disabled):not(.disabled):active,
.show > .bag-button.dropdown-toggle {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: greens;
}
.sidebar-fav-bottom {
  border-radius: 5px 5px 0 0;
  height: 68px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.wishlist {
  border-color: #002886;
  background: #002886;
  color: white;
  width: 90%;
  font-size: 20px;
  text-transform: uppercase;
}
</style>
