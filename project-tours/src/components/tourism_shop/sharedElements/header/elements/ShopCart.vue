<template>
  <div>
    <b-sidebar
      @hidden="hideCart()"
      no-header
      :visible="isVisible"
      right
      backdrop
      shadow
    >
      <div class="sidebar-title">
        <div class="title-icon">
          <BIconBasket3Fill class="basket-look"> </BIconBasket3Fill>
        </div>
        <div class="title">
          <p class="title-text">Shopping Bag</p>
        </div>
      </div>
      <div class="sidebar-cart-body">
        <ul class="products">
          <li class="product" v-for="(product, index) in products" :key="index">
            <div class="product-cart-slot">
              <div class="product-img-slot">
                <a :href="product.href">
                  <img class="product-img" :src="product.imag" />
                </a>
              </div>
              <div class="product-desc">
                <div class="product-name">
                  <div class="product-f-1">
                    <a :href="product.href" class="href-custom">
                      {{ product.name }}</a
                    >
                  </div>
                  <div class="product-f-2">
                    <span> {{ product.price.toFixed(2) }} $ </span>
                  </div>
                </div>
                <div class="product-qty">
                  <b-form-spinbutton
                    class="qty-spin"
                    v-model="product.qty"
                    min="1"
                    max="100"
                    inline
                  ></b-form-spinbutton>
                </div>
              </div>
              <div class="right-field">
                <div class="trash-icon">
                  <b-button class="trash-button"
                    ><BIconTrash></BIconTrash>
                  </b-button>
                </div>
                <div class="cost">
                  <span>{{(product.qty * product.price).toFixed(2) }} $</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sidebar-cart-bottom">
        <div class="totals">
          <span class="label">Subtotal:</span>
          <span class="amount">{{ calcSubtotal().toFixed(2)}} $</span>
        </div>
        <div class="action-buttons">
          <b-button class="view-cart" href="#">Cart</b-button>
          <b-button class="checkout" href="#">Checkout</b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { BIconBasket3Fill, BIconTrash } from "bootstrap-vue";
export default {
  components: {
    BIconBasket3Fill,
    BIconTrash,
  },
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
  methods: {
    hideCart() {
      this.$emit("hide-cart");
    },
    calcSubtotal() {
      let subtotal = 0;

      this.products.forEach((product) => {
        subtotal += product.qty * product.price;
      });
      return subtotal;
    }
  },
};
</script>

<style>
.b-sidebar-body {
  background-color: #002886;
  width: 110%;
  margin-left: -10%;
}
.sidebar-title {
  height: 57px;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.title-icon {
  display: flex;
  width: 20%;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-right: -10px;
}
.title {
  margin-top: 9px;
}
.basket-look {
  justify-self: center;
  color: white;
  font-size: 40px;
  margin-left: 8px;
  margin-top: 1px;
}
.title-text {
  color: black;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1;
  margin: 5px 0 25px 0;
  display: flex;
  justify-content: center;
  color: white;
}
.products {
  margin: 0;
  padding: 0 0 15px 0;
  list-style: none;
  height: calc(100vh - 205px);
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  position: relative;
  z-index: 0;
}
.products::-webkit-scrollbar {
  width: 0%;
}
.product {
  margin: 10px 5px 5px 5px;
  padding: 0;
  min-height: 30px;
  background-color: white;
  border-radius: 7px;
  color: gray;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  transition: all 0.5s linear;
}
.product-cart-slot {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.product-desc {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
.product-name {
  width: 100%;
  height: 50%;
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.product-f-1 {
  width: 100%;
  height: 40%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.product-f-2 {
  width: 100%;
  height: 40%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.right-field {
  width: 17%;
}
.trash-icon {
  width: 15%;
  height: 50%;
  margin-left: 29px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
.trash-button {
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
.trash-button:hover {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: red;
}
.trash-button:not(:disabled):not(.disabled):active,
.show > .trash-button.dropdown-toggle {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(161, 0, 0);
}
.cost {
  height: 50%;
  margin-left: -15px;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.product-qty {
  width: 100%;
  height: 50%;
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.qty-spin {
  border-color: rgba(0, 0, 0, 0);
  color: gray;
}
.qty-spin .btn {
  background-color: rgba(0, 0, 0, 0);
  color: gray;
  border-color: rgba(0, 0, 0, 0);
}
.product-img-slot {
  width: 100px;
  height: 100px;
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.product-img {
  border-radius: 5px;
  width: 85px;
  height: 85px;
}
.sidebar-cart-bottom {
  border-radius: 5px 5px 0 0;
  margin-top: 0px;
  height: 123px;
  background: lightgray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.totals {
  border-radius: 5px 5px 0 0;
  background: lightgray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
}
.label {
  font-size: 23px;
  text-transform: uppercase;
  margin-left: 10px;
  margin-top: 5px;
}
.amount {
  margin-right: 10px;
  margin-top: 7px;
  font-size: 20px;
  font-weight: 600;
}
.action-buttons {
  height: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  justify-content: center;
  align-content: center;
}
.view-cart {
  background: white;
  border-color: gray;
  color: gray;
  margin-right: 10px;
  width: 30%;
  font-size: 20px;
  text-transform: uppercase;
}
.checkout {
  border-color: #002886;
  background: #002886;
  color: white;
  width: 60%;
  font-size: 20px;
  text-transform: uppercase;
}
.href-custom {
  color: gray;
  text-decoration: none;
}
</style>
