<template>
  <div style="background-color: #e5f0ff">
    <div style="position: relative;">
      <img src="@/assets/shop/mountains.png" width="100%" />
      <img
        class="pointer"
        style="top: 86.1%; left: 35.65%"
        src="@/assets/shop/Here.png"
      />
      <img
        class="pointer"
        style="top: 76.2%; left: 69.15%"
        src="@/assets/shop/Here.png"
      />
      <img
        class="pointer"
        style="top: 18.6%; left: 79.9%"
        src="@/assets/shop/EvenHere.png"
      />
    </div>
    <div class="text-box">
      <h1 class="head-text">Best</h1>
      <h1 class="head-text">travel</h1>
      <h1 class="head-text">equipment</h1>
      <span class="head-desc"
        >With our equipment you can reach incredible heights. Every corner of
        the world is waiting for you. Get our stuff and conquer any depth or
        mountain.</span
      >
      <b-button class="head-button">Discover more</b-button>
    </div>
  </div>
</template>

<style>
.pointer {
  position: absolute;
  width:62px;
  transition: transform 0.3s ease;
}
.pointer:hover {
  transform: scale(1.2) translateY(-5px);
}
.text-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  color: #002886;
  left: 80px;
  top: 260px;
  width: 537px;
  height: 367px;
}
.head-text {
  text-transform: uppercase;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px; /* 110% */
  letter-spacing: 1px;
}
.head-desc {
  width: 90%;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
.head-button {
  margin-top: 22px;
  background-color: #238aff;
  border-color: #238aff;
  width: 25%;
  border-radius: 20px;
}
.head-button:hover {
  background-color: #002886;
  border-color: #002886;
}
.head-button:not(:disabled):not(.disabled):active,
.show > .head-button.dropdown-toggle {
  background-color: #63acff;
  border-color: #63acff;
}
</style>
