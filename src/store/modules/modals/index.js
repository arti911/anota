export default {
  state: {
    isModalDelete: false,
    isModalNote: false,
    isModalDeleteNote: false
  },
  mutations: {
    showModalDelete: state => {
      state.isModalDelete = true
    },
    showModalDeleteNote: state => {
      state.isModalDeleteNote = true
    },
    hideModalDeleteNote: state => {
      state.isModalDeleteNote = false
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
