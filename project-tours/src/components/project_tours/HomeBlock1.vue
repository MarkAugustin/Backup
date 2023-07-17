<template>
  <div class="block-for-dropdown">
    <div style="width: 95%; align-self: center">
      <b-row style="width: 100%">
        <b-col
          class="custom-col"
          style="border-right: 1px solid rgb(150, 150, 150)"
        >
          <div style="width: 260px">
            <b-dropdown variant="custom">
              <template #button-content>
                <div class="custom-butt-content" @click="DestOff()">
                  <div style="position: absolute; margin-right: 70%">
                    <img
                      src="@/assets/globe.svg"
                      aria-hidden="true"
                      style="width: 24px"
                    />
                  </div>
                  <div style="margin-left: 15%">
                    <span>{{ destination }}</span>
                  </div>
                </div>
              </template>
              <b-dropdown-item-button
                v-for="destinationItem in destinationsArray"
                :key="destinationItem"
                @click="ChooseDest(destinationItem)"
              >
                {{ destinationItem }}
              </b-dropdown-item-button>
            </b-dropdown>
          </div>
        </b-col>
        <b-col
          class="custom-col"
          style="border-right: 1px solid rgb(150, 150, 150)"
        >
          <div style="width: 235px">
            <b-dropdown variant="custom" :disabled="isCountryDisabled">
              <template #button-content>
                <div class="custom-butt-content" @click="CountryOff()">
                  <div style="position: absolute; margin-right: 66%">
                    <img
                      src="@/assets/map.svg"
                      aria-hidden="true"
                      style="width: 24px"
                    />
                  </div>
                  <div style="margin-left: 15%">
                    <span>{{ country }}</span>
                  </div>
                </div>
              </template>
              <b-dropdown-item-button
                v-for="countryItem in countryArray"
                :key="countryItem"
                @click="ChooseCountry(countryItem)"
              >
                {{ countryItem }}</b-dropdown-item-button
              >
            </b-dropdown>
          </div>
        </b-col>
        <b-col
          class="custom-col"
          style="border-right: 1px solid rgb(150, 150, 150)"
        >
          <div style="width: 211px">
            <b-dropdown variant="custom" :disabled="isDateDisabled">
              <template #button-content>
                <div class="custom-butt-content">
                  <div style="position: absolute; margin-right: 66%">
                    <img
                      src="@/assets/date.svg"
                      aria-hidden="true"
                      style="width: 24px"
                    />
                  </div>
                  <div style="margin-left: 15%">
                    <span>{{ date }}</span>
                  </div>
                </div>
              </template>
              <b-dropdown-item-button
                v-for="dateItem in dateArray"
                :key="dateItem"
                @click="date = dateItem"
                >{{ dateItem }}</b-dropdown-item-button
              >
            </b-dropdown>
          </div>
        </b-col>
        <b-col class="custom-col" style="margin-right: -7%">
          <b-button class="btn-search">
            <div class="custom-butt-content">
              <img
                src="@/assets/search.svg"
                aria-hidden="true"
                style="width: 24px"
              />
              <div><span>Search</span></div>
            </div>
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DestCountry: [
        { dest: "Europe", countries: ["Italy", "Germany"] },
        { dest: "Asia", countries: ["China", "Japan"] },
      ],
      CountryDate: [
        { country: "Italy", dates: ["July, 1-3", "July, 5-7"] },
        { country: "Germany", dates: ["July, 8-10", "July, 11-15"] },
        { country: "China", dates: ["August, 11-12", "August, 25-27"] },
        { country: "Japan", dates: ["August, 17-20", "August, 22-23"] },
      ],
      isCountryDisabled: true,
      isDateDisabled: true,
      destination: "Select destination",
      destinationsArray: ["Asia", "Europe"],
      country: "Select country",
      countryArray: [],
      date: "Select date",
      dateArray: [],
    };
  },
  methods: {
    ChooseDest(destinationItem) {
      this.destination = destinationItem;
      this.isCountryDisabled = false;
      for (let i = 0; i < this.DestCountry.length; i++) {
        if (this.destination == this.DestCountry[i].dest) {
          this.countryArray = this.DestCountry[i].countries;
        }
      }
    },
    DestOff() {
      this.isCountryDisabled = true;
      this.isDateDisabled = true;
      this.country = "Select country";
      this.date = "Select date";
    },
    ChooseCountry(countryItem) {
      this.country = countryItem;
      this.isDateDisabled = false;
      for (let i = 0; i < this.CountryDate.length; i++) {
        if (this.country == this.CountryDate[i].country) {
          this.dateArray = this.CountryDate[i].dates;
        }
      }
    },
    CountryOff() {
      this.isDateDisabled = true;
      this.date = "Select date";
    },
  },
};
</script>

<style>
.block-for-dropdown {
  position: absolute;
  left: 14%;
  top: 76%;
  display: inline-flex;
  width: 70%;
  height: 100px;
  border-radius: 1rem;
  margin-block: 2%;
  flex-direction: row;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
}
.custom-col {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 60px;
}
.btn-group {
  width: 100%;
}
@font-face {
  font-family: "GT Walsheim Pro Regular";
  src: url("@/fonts/GTWalsheimPro-Regular.woff") format("woff");

  font-style: normal;
  line-height: normal;
}
.btn-custom {
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  background-color: white;
  color: rgb(8, 8, 8);
  margin-block: 10%;
  margin-right: 5%;
  border-radius: 1.2rem;
  font-size: 20px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
}
.btn-custom:hover {
  background: rgba(217, 225, 164, 1);
  color: rgb(10, 10, 10);
}
.btn-custom:not(:disabled):not(.disabled):active,
.show > .btn-custom.dropdown-toggle {
  background: rgba(177, 184, 134, 1);
  color: rgb(16, 16, 16);
  border-color: rgba(255, 255, 255, 0);
}
.btn-custom:disabled {
  border-color: rgba(255, 255, 255, 0);
  color: rgb(10, 10, 10);
}
.custom-butt-content {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.btn-search {
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  width: 140px;
  background-color: white;
  border-color: rgba(240, 248, 255, 0);
  color: rgb(0, 0, 0);
  border-radius: 1.2rem;
  height: 45px;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.btn-search:hover {
  width: 140px;
  background: rgba(217, 225, 164, 1);
  color: rgb(2, 2, 2);
  border-color: rgba(240, 248, 255, 0);
  border-radius: 1.2rem;
  height: 45px;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.btn-search:not(:disabled):not(.disabled):active,
.show > .btn-search.dropdown-toggle {
  background: rgba(177, 184, 134, 1);
  color: rgb(8, 8, 8);
  border-color: rgba(255, 255, 255, 0);
}
</style>
