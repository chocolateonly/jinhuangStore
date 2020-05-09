export default {
  state: {
    address:{} //收货地址
  },
  getters:{
    address:state=>state.address
  },
  mutations: {
    setAddress: (state,{address})=>{
      state.address=address
    }
  },
  actions:{
     selectAddress({commit},address){
        commit('setAddress',{address})
    }
  }
}
