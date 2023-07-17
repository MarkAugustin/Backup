<template>
  <div class="footer">
    <div class="footer-container">
      <div class="logo">
        <a href="/Shop">
          <img src="@/assets/logo.png" width="200" height="54" />
        </a>
      </div>
      <div class="section text-start">
        <a href="" class="head">Clothes</a>
        <a href="" class="text"> Men's clothes</a>
        <a href="" class="text"> Women's clothes</a>
        <a href="" class="text"> Children's clothes</a>
        <a href="" class="text"> Ski clothing</a>
        <a href="" class="text"> Shoes</a>
        <a href="" class="text"> Hats</a>
      </div>
      <div class="section text-start">
        <a href="" class="head">Equipment</a>
        <a href="" class="text"> Mountaineering</a>
        <a href="" class="text"> Cycling</a>
        <a href="" class="text"> Ski equipment</a>
        <a href="" class="text"> Diving equipment</a>
        <a href="" class="text"> Kayaks and accessories</a>
      </div>
      <div class="section text-start">
        <a href="" class="head">Autoturism</a>
        <a href="" class="text"> Roof boxes</a>
        <a href="" class="text"> Rooftop tents</a>
        <a href="" class="text"> Roof crossbars</a>
        <a href="" class="text"> Bike racks</a>
        <a href="" class="text"> Mounts</a>
        <a href="" class="text"> Refrigerators</a>
      </div>
      <div class="section text-start">
        <a href="" class="head">Other stuff</a>
        <a href="" class="text"> Gloves</a>
        <a href="" class="text"> Glasses</a>
        <a href="" class="text"> Health</a>
        <a href="" class="text"> Yoga</a>
        <a href="" class="text"> Power suplies</a>
        <a href="" class="text"> Dishes</a>
        <a href="" class="text"> Multitools</a>
      </div>
      <div class="section text-end">
        <a href="" class="head">Call us</a>
        <span class="right-text"> +373 670 00 000</span>
        <a href="" class="head">Email us</a>
        <span class="right-text"> traverse@shop.com</span>
        <a href="" class="head">Social media</a>
        <div>
          <a href="/" class="custom-link-footer">
            <b-icon-facebook class="icon"></b-icon-facebook>
          </a>
          <a href="/" class="custom-link-footer"
            ><b-icon-instagram class="icon"></b-icon-instagram>
          </a>
          <a href="/" class="custom-link-footer">
            <b-icon-twitter class="icon"></b-icon-twitter>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span style="margin-right: 20px">PRIVACY</span>
      <span>ⓒ{{ currentYear }} TRAVERSE. ALL RIGHTS RESERVED </span>
      <span style="margin-left: 20px">COOKIES</span>
    </div>
  </div>
</template>

<script>
import { BIconFacebook, BIconInstagram, BIconTwitter } from "bootstrap-vue";

export default {
  components: { BIconFacebook, BIconInstagram, BIconTwitter },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #06224F;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 0, 0, 0);
  max-width: 1400px;
  width: 100%;
  padding: 90px 15px;
}
.text {
  color: white;
  text-align: left;
  margin-bottom: 5px;
  text-decoration: none;
}
.text:hover {
  color: #238aff;
  text-align: left;
  text-decoration: underline;
}
.right-text {
  margin-bottom: 10px;
}
.head {
  color: #238aff;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-decoration: none;
}
.head:hover {
  color: white;
  text-decoration: underline;
}
.section {
  display: flex;
  flex-direction: column;
}
.icon {
  font-size: 30px;
  margin-left: 10px;
}
.custom-link-footer {
  text-decoration: none;
  color: white;
}
.footer-bottom {
  display: flex;
  font-size: 12px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 20px;
}
</style>
