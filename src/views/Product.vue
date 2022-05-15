<template>
  <div class="product">
  </div>
</template>
<script>

export default {
  components: { ProductBox },
  data(){
    return{
      number: 0,
      product: ''
    }
  },
  methods: {
    addCart: function(product){
      // 判斷存貨
      alert('存貨不足')
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