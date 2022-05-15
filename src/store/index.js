import { createStore } from 'vuex'

export default createStore({
  state: {
    serverPath: 'http://54.250.170.149/',
    userId: 12,
    cart: []
  },
  getters:{
    currentQuantiy(state){
    }
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      state.cart.map(function(product){
        if(product.id == data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })

      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    }
  }
})
