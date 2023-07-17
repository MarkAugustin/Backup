<template>
    <div>
      <home-page-banner />
      <home-page-features />
      <home-page-special-offer />
      <home-page-product-carousel />
      <home-page-backpacks />
      <home-page-to-trips />
      <home-page-blog />
    </div>
  </template>
  
  <script>
  import HomePageBanner from "./elements/HomePageBanner.vue";
  import HomePageProductCarousel from "./elements/HomePageCarousel.vue"
  import HomePageFeatures from "./elements/HomePageFeatures.vue"
  import HomePageSpecialOffer from "./elements/HomePageSpecialOffer.vue"
  import HomePageBackpacks from "./elements/HomePageBackpacks.vue"
  import HomePageToTrips from "./elements/HomePageToTrips.vue"
  import HomePageBlog from "./elements/HomePageBlog.vue"
  
  export default {
    components: {
      HomePageBanner,
      HomePageProductCarousel,
      HomePageFeatures,
      HomePageSpecialOffer,
      HomePageBackpacks,
      HomePageToTrips,
      HomePageBlog
    },
  };
  </script>
  
  