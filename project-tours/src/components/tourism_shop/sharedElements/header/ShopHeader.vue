<template>
  <div>
    <shop-navbar
      @show-search="showSearch()"
      @show-fav="showFav()"
      @show-cart="showCart()"
    />
    <shop-cart-sidebar
      @hide-cart="isCartVisible = false"
      :isVisible="isCartVisible"
    />
    <shop-favourites-sidebar
      @hide-fav="isFavVisible = false"
      :isVisible="isFavVisible"
    />
    <shop-search-sidebar
      @hide-search="isSearchVisible = false"
      :isVisible="isSearchVisible"
    />
  </div>
</template>

<script>
import ShopNavbar from "./elements/ShopNavbar.vue";
import ShopCartSidebar from "./elements/ShopCart.vue";
import ShopFavouritesSidebar from "./elements/ShopFavourites";
import ShopSearchSidebar from "./elements/ShopSearch.vue";

export default {
  components: {
    ShopNavbar,
    ShopCartSidebar,
    ShopFavouritesSidebar,
    ShopSearchSidebar,
  },
  data() {
    return {
      isCartVisible: false,
      isFavVisible: false,
      isSearchVisible: false,
      isLogInVisible: false,
    };
  },
  methods: {
    showSearch() {
      this.isSearchVisible = true;
    },
    showFav() {
      this.isFavVisible = true;
    },
    showCart() {
      this.isCartVisible = true;
    },
  },
};
</script>
