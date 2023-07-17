<template>
  <div>
    <shop-header />
    <shop-home-page />
    <shop-footer />
  </div>
</template>

<script>
import ShopHeader from "./sharedElements/header/ShopHeader.vue";
import ShopFooter from "./sharedElements/footer/ShopFooter.vue";
import ShopHomePage from "./homePage/ShopHomePage.vue";

export default {
  components: {
    ShopHeader,
    ShopFooter,
    ShopHomePage
  },
};
</script>
