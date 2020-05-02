export default {
  state: {
    isModalDelete: false,
    isModalNote: false,
    isModalDeleteNote: false,
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
        state.newNote = obj
      }

      state.isModalNote = true
    },
    hideModalNote: state => {
      state.isModalNote = false
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
