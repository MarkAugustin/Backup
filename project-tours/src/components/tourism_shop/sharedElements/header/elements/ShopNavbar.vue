<template>
  <div class="custom-header">
    <div class="sign-up-panel">
      <div style="padding: 15px; display: flex; justify-content: center">
        <span style="align-self: center"
          >Sign up and GET 30% OFF for your first order</span
        >
        <b-row style="width: 90px; height: 30px">
          <b-col
            style="padding: 0; border-right: 2px solid rgba(255, 255, 255, 0.5)"
          ></b-col>
          <b-col style="padding: 0"></b-col>
        </b-row>
        <a href="" class="sign-up-link">Sign up now</a>
      </div>
    </div>
    <div class="navbar-panel">
      <div class="navbar-container">
        <div class="logo">
          <a href="/Shop">
            <img src="@/assets/shop/logo-blue.png" alt="" width="200" />
          </a>
        </div>
        <div class="navbar-group">
          <div class="navbar-element">
            <b-dropdown text="Clothes" toggle-class="dropdown-custom">
              <b-dropdown-item href="#">Men's clothes</b-dropdown-item>
              <b-dropdown-item href="#">Women's clothes</b-dropdown-item>
              <b-dropdown-item href="#">Children's clothes</b-dropdown-item>
              <b-dropdown-item href="#">Ski clothing</b-dropdown-item>
              <b-dropdown-item href="#">Shoes</b-dropdown-item>
              <b-dropdown-item href="#">Hats</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="navbar-element">
            <b-dropdown text="Equipment" toggle-class="dropdown-custom">
              <b-dropdown-item href="#">Mountaineering </b-dropdown-item>
              <b-dropdown-item href="#">Cycling</b-dropdown-item>
              <b-dropdown-item href="#">Ski equipment</b-dropdown-item>
              <b-dropdown-item href="#">Diving equipment</b-dropdown-item>
              <b-dropdown-item href="#">Kayaks and accessories</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="navbar-element">
            <b-dropdown text="Autotourism" toggle-class="dropdown-custom">
              <b-dropdown-item href="#">Roof boxes</b-dropdown-item>
              <b-dropdown-item href="#">Rooftop tents</b-dropdown-item>
              <b-dropdown-item href="#">Roof crossbars</b-dropdown-item>
              <b-dropdown-item href="#">Bike racks</b-dropdown-item>
              <b-dropdown-item href="#">Mounts</b-dropdown-item>
              <b-dropdown-item href="#">Refrigerators</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="navbar-element">
            <b-dropdown text="Other stuff" toggle-class="dropdown-custom">
              <b-dropdown-item href="#">Gloves</b-dropdown-item>
              <b-dropdown-item href="#">Glasses</b-dropdown-item>
              <b-dropdown-item href="#">Health</b-dropdown-item>
              <b-dropdown-item href="#">Yoga</b-dropdown-item>
              <b-dropdown-item href="#">Power supplies</b-dropdown-item>
              <b-dropdown-item href="#">Dishes</b-dropdown-item>
              <b-dropdown-item href="#">Multitools</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="navbar-element">
            <a class="custom-link-navbar" href="#">About us</a>
          </div>
        </div>
        <div class="navbar-group">
          <div class="navbar-element">
            <b-button class="custom-button" >
              <div class="self-align-center">
                <b-icon-map></b-icon-map> Travel
              </div>
            </b-button>
          </div>
          <div class="navbar-element">
            <div @click="showSearch()">
              <a href="#" class="custom-link-navbar">
                <b-icon-search class="custom-icon"></b-icon-search>
              </a>
            </div>
          </div>
          <div class="navbar-element">
            <div @click="showFav()">
              <a href="#" class="custom-link-navbar">
                <b-icon-heart class="custom-icon"></b-icon-heart>
              </a>
            </div>
          </div>
          <div class="navbar-element">
            <div @click="showCart()">
              <a href="#" class="custom-link-navbar">
                <b-icon-basket3 class="custom-icon"></b-icon-basket3>
              </a>
            </div>
          </div>
          <div class="navbar-element" @click="showLogIn()">
            <a href="#" class="custom-link-navbar">
              <b-icon-box-arrow-in-right style="font-size: 30px;">
              </b-icon-box-arrow-in-right>
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BIconBoxArrowInRight,
  BIconSearch,
  BIconHeart,
  BIconBasket3,
  BIconMap,
} from "bootstrap-vue";
export default {
  components: {
    BIconMap,
    BIconBasket3,
    BIconHeart,
    BIconSearch,
    BIconBoxArrowInRight,
  },
  methods: {
    showSearch() {
      this.$emit("show-search");
    },
    showFav() {
      this.$emit("show-fav");
    },
    showCart() {
      this.$emit("show-cart");
    },
    showLogIn() {
      this.$emit("show-log");
    },
  },
};
</script>

<style>
.custom-header {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 999;
}
.sign-up-panel {
  background-color: #002886;
  align-items: center;
  width: 100%;
}
.sign-up-link {
  align-self: center;
  color: white;
  text-align: left;
  text-decoration: none;
}
.sign-up-link:hover {
  color: #238AFF;
  text-align: left;
  text-decoration: underline;
}
.navbar-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: rgb(229, 240, 255);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 0, 0, 0);
  max-width: 1400px;
  width: 100%;
}
.navbar-group {
  display: flex;
}
.navbar-element {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 0px;
}
.dropdown-custom {
  font-size: 17px;
  color: #002886;
  align-self: center;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.dropdown-custom:hover {
  color: #238AFF;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.dropdown-custom:not(:disabled):not(.disabled):active,
.show > .dropdown-custom.dropdown-toggle {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: #63ACFF;
}
.dropdown-toggle::after:hover {
  opacity: 0;
}
.dropdown-item:not(:disabled):not(.disabled):active,
.show > .dropdown-item.dropdown-toggle {
  background-color: #002886;
}
.custom-link-navbar {
  text-decoration: none;
  font-size: 17px;
  color: #002886;
}
.custom-link-navbar:hover {
  color: #238AFF;
}
.custom-link-navbar:not(:disabled):not(.disabled):active,
.show > .custom-link-navbar.dropdown-toggle {
  background-color: rgba(0, 0, 0, 0);
  color: #63ACFF;
}
.custom-icon {
  font-size: 20px;
  color: #002886;
}
.custom-icon:hover {
  font-size: 20px;
  color: #238AFF;
}
.custom-icon:not(:disabled):not(.disabled):active,
.show > .custom-icon.dropdown-toggle {
  color: #63ACFF;
}
.custom-button {
  border-radius: 1.5rem;
  background-color: #002886;
  border-color: #002886;
  color: white;
  width: 110%;
  display: flex;
  place-content: center;
  text-align: center;
}
.custom-button:hover {
  background-color: #238aff;
  border-color: #238aff;
  color: white;
}
.custom-button:not(:disabled):not(.disabled):active,
.show > .custom-button.dropdown-toggle {
  background-color: #63ACFF;
  border-color: #63ACFF;
  color: rgb(255, 255, 255);
}
</style>
