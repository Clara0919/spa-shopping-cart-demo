<template>
  <div class="product">
    <div class="product-component">
      <ProductBox v-bind="product">
        <input type="number" v-model.number="number"> &nbsp;&nbsp;
        <button @click="addCart(product)">加入購物車</button>
      </ProductBox>
    </div>
    <hr>
    <h3>商品描述</h3>
    <p>{{ product.desc }}</p>
  </div>
</template>
<script>
import ProductBox from '../components/ProductBox.vue'
import axios from 'axios'

export default {
  components: { ProductBox },
  data(){
    return{
      number: 0,
      product: '',
      serverPath: this.$store.state.serverPath,
    }
  },
  mounted() {
      axios.get(`${this.serverPath}/products/${this.$route.params.productId}`)
           .then(res => this.product = res.data);
  },
  methods: {
    addCart: function(product){
      if(product.quantity - this.number < 0){
        alert('存貨不足')
        return;
      }
      
      // 
      alert('已加入購物車')
    }
  }
}
</script>
<style scoped>
  .product{
    width: 60%;
    margin: auto;
  }
  .product-component{
    width: 50%;
    max-width: 350px;
    margin: auto;
  }
  .product-buy{
    text-align: center;
  }
</style>