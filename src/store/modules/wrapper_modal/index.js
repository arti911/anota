export default {
  state: {
    isShow: false,
    color: false,
    isAddNote: false,
    isMenuNote: false,
    isDeleteNote: false,
    isConfirmDeleteNote: false,
    isEditNote: false,
    isConfirmEditNote: false,
    newNote: {
      id: Date.now(),
      title: '',
      todos: [],
      isOpenMenu: false
    }
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
    showAddNote: state => {
      state.isAddNote = true
    },
    hideAddNote: state => {
      state.isAddNote = false
    },
    showConfirmDeleteNote: state => {
      state.isConfirmDeleteNote = true
    },
    hideConfirmDeleteNote: state => {
      state.isConfirmDeleteNote = false
    },
    showMenuNote: state => {
      state.isMenuNote = true
    },
    hideMenuNote: state => {
      state.isMenuNote = false
    },
    showDeleteNote: state => {
      state.isDeleteNote = true
    },
    hideDeleteNote: state => {
      state.isDeleteNote = false
    },
    showEditNote: (state, obj) => {
      if (obj) {
        state.newNote = JSON.parse(JSON.stringify(obj))
      }
      state.isEditNote = true
    },
    hideEditNote: state => {
      state.isEditNote = false
    },
    defaultValue: state => {
      state.newNote = {
        id: Date.now(),
        title: '',
        todos: [],
        isOpenMenu: false
      }
    },
    showConfirmEditNote: state => {
      state.isConfirmEditNote = true
    },
    hideConfirmEditNote: state => {
      state.isConfirmEditNote = false
    }
  }
}
