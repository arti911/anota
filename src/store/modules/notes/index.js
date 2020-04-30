export default {
  state: {
    activeNote: null,
    lists: [
      {
        id: 0,
        title: 'Name',
        todos: [
          {
            id: 0,
            title: 'Study for test',
            edit: false,
            done: false
          },
          {
            id: 1,
            title: 'Call Anne',
            edit: false,
            done: true
          },
          {
            id: 2,
            title: 'Buy groceries',
            edit: false,
            done: false
          },
          {
            id: 3,
            title: 'Clean th kitchen',
            edit: false,
            done: false
          },
          {
            id: 4,
            title: 'Go for a run',
            edit: false,
            done: true
          }
        ],
        isOpenMenu: false
      },
      {
        id: 1,
        title: 'Numbers',
        todos: [
          {
            id: 0,
            title: '1',
            edit: false,
            done: false
          }
        ],
        isOpenMenu: false
      }
    ]
  },
  mutations: {
    openMenu: (state, id) => {
      state.activeNote = id

      state.lists.map(item => {
        if (item.id === id) {
          item.isOpenMenu = true
        }
      })
    },
    closeMenu: (state, id) => {
      state.lists.map(item => {
        if (item.id === id) {
          item.isOpenMenu = false
        }
      })
    },
    addNote: (state, note) => {
      state.lists.push(note)
    },
    removeNote: (state, id) => {
      state.lists = state.lists.filter(item => item.id !== id)
    }
  }
}
