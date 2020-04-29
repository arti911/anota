export default {
  state: {
    isShow: false,
    color: false
  },
  mutations: {
    showWrap: (state, color = false) => {
      state.color = color
      state.isShow = true
    },
    hideWrap: state => {
      state.isShow = false
    },
    addColorWrap: state => {
      state.color = true
    },
    removeColorWrap: state => {
      state.color = false
    }
  }
}
