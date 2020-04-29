export default {
  state: {
    modalShow: false
  },
  mutations: {
    showModal: state => {
      state.modalShow = true
    },
    hideModal: state => {
      state.modalShow = false
    }
  }
}
