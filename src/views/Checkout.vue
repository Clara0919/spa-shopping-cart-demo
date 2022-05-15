<template>
  <div class="product-box">
    <template v-for="product in products" :key="product">
      <ProductBox v-bind="product" :has_border="true" >
        <h3>選購數量: {{product.number}}</h3>
      </ProductBox>
    </template>
  </div>
</template>
<script>
import ProductBox from '../components/ProductBox.vue'

export default {
  components: { ProductBox },
  data(){
    return{
      products: this.$store.state.cart,
    }
  },
}
</script>
<style scoped>
  .product-box{
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
  }
</style>