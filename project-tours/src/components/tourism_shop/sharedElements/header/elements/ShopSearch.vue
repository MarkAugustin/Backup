<template>
  <div>
    <b-modal
      size="lg"
      @hidden="hideSearch()"
      :visible="isVisible"
      hide-header
      hide-footer
    >
      <div class="search">
        <b-form-input class="searchbar" placeholder="Search"> </b-form-input>
        <b-button class="search-button" type="submit"> Search</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {},
  },
  methods: {
    hideSearch() {
      this.$emit("hide-search");
    },
  },
};
</script>

<style>
.search {
  display: flex;
}
.searchbar {
  width: 90%;
  border-radius: 5px 0 0 5px;
}
.search-button {
  width: 10%;
  border-radius: 0 5px 5px 0;
  background-color: #002886;
}
</style>
