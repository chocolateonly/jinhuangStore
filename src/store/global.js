export default {
  state: {
    loading: false,
    error: '',
    uid:'',
    token:''
  },
  mutations: {
    changeLoading:(state,val)=>{
      console.log('loading')
      state.loading=val
    },
    changeError:(state,val)=>{
      state.error=val
    },
  },
  actions: {
    setLoading: ({commit}, val) => {
      console.log(val)
      commit('changeLoading', val)
    },
    setError: ({commit}, val) => {
      commit('changeError', val)
    },
  }
}