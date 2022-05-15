<template>
  <div class="row">
    <div class="product-box" v-for="product in products" :key="product.id">
      <div class="image-box">
        <img :src="parseImgPath(product.img_path)">
      </div>
      <h4>{{product.brand}} <small>{{product.category}}</small></h4>
      <h3>{{product.name}}</h3>
      <p>售價: {{product.price}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return{
      products:[],
      serverPath: this.$store.state.serverPath,
      userId: this.$store.state.userId
    }
  },
  mounted() {
    axios.get(`${this.serverPath}/products?user_id=${this.userId}`)
         .then(res => this.products = res.data)
  },
  methods:{
    parseImgPath: function(path){
      return this.$store.state.serverPath + path
    }
  }

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