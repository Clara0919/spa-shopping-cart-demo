<template>
  <div class="row">
    <template v-for="product in products">
      <ProductBox v-bind="product" :has_border="true"></ProductBox>
      <!-- <ProductBox :name="product.name" :brand="product.brand" :has_border="true"></ProductBox> -->
    </template>
  </div>
</template>
<script>
import axios from 'axios'
import ProductBox from '../components/ProductBox.vue'

export default {
  data() {
    return {
      products: [],
      serverPath: this.$store.state.serverPath,
      userId: this.$store.state.userId
    };
  },
  mounted() {
      axios.get(`${this.serverPath}/products?user_id=${this.userId}`)
          .then(res => this.products = res.data);
  },
  methods: {
      parseImgPath: function (path) {
          return this.$store.state.serverPath + path;
      }
  },
  components: { ProductBox }
}

</script>
<style>
  div.row{
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
  }

  /* products css */
  .border{
    border: 1px solid #BBBBBB;
  }

  div.product-box{
    min-width: 350px;
    width: 24%;
    text-align: center;
    margin: 1px;
    cursor: pointer;
    display: block;
  }

  div.product-box .image-box{
    width: 100%;
    height: 250px;
    display: flex;
  }
  img{
    display: block;
    width: 50%;
    margin: auto;
  }

  small{
    color: #CCCCCC
  }

</style>