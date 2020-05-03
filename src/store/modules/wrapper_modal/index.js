export default {
  state: {
    isShow: false,
    color: false,
    confirm: false
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
    },
    showConfirm: state => {
      state.confirm = true
    },
    hideConfirm: state => {
      state.confirm = false
    }
  }
}
