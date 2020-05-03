export default {
  state: {
    isModalDelete: false,
    isModalDeleteNote: false,
    isModalNote: false,
    isModalCancelEditing: false,
    newNote: {
      id: Date.now(),
      title: '',
      todos: [],
      isOpenMenu: false
    }
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
    showModalNote: (state, obj) => {
      if (obj) {
        state.newNote = JSON.parse(JSON.stringify(obj))
      }

      state.isModalNote = true
    },
    hideModalNote: state => {
      state.isModalNote = false
    },
    showModalCancelEditing: state => {
      state.isModalCancelEditing = true
    },
    hideModalCancelEditing: state => {
      state.isModalCancelEditing = false
    },
    defaultValue: state => {
      state.newNote = {
        id: Date.now(),
        title: '',
        todos: [],
        isOpenMenu: false
      }
    }
  }
}
