export default {
  state: {
    isModalDelete: false,
    isModalNote: false
  },
  mutations: {
    showModalDelete: state => {
      state.isModalDelete = true
    },
    hideModalDelete: state => {
      state.isModalDelete = false
    },
    showModalNote: state => {
      state.isModalNote = true
    },
    hideModalNote: state => {
      state.isModalNote = false
    }
  }
}
