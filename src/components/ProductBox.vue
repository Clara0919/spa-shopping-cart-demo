<template>
  <div></div>
</template>
<script>
export default {
  props: {
    'id':Number,
    'img_path':String,
    'brand':String,
    'category':String,
    'name':String,
    'price':Number,
    'has_border':{
      type: Boolean,
      default: false
    }
  },
  methods:{
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
    parseImgPath: function(path){
      return this.$store.state.serverPath + path
    }
  }
}
</script>
<style scoped>
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