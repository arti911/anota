export default {
  state: {
    el: {
      id: null,
      title: '',
      tasks: []
    },
    newTask: true,
    id: 1
  },
  getters: {
    saveNoteDisabeled: state => state.el.title && state.el.tasks.length && state.newTask
  },
  mutations: {
    addTask: state => {
      state.el.tasks.push({
        id: Date.now(),
        title: '',
        done: false,
        edit: true
      })
      state.newTask = false
    },
    saveTask: (state, arg) => {
      const [
        id,
        title,
        edit
      ] = arg

      if (title !== '') {
        state.el.tasks.map(task => {
          if (task.id === id) {
            task.title = title
            task.edit = edit
          }
        })

        state.newTask = true
      }
    },
    editTask: (state, id) => {
      state.newTask = false

      state.el.tasks.map(task => {
        if (task.id === id) {
          task.edit = true
        }
      })
    },
    cancelTask: (state, arg) => {
      const [
        id,
        title
      ] = arg

      if (title === '') {
        state.el.tasks = state.el.tasks.filter(task => task.id !== id)
      } else {
        state.el.tasks.map(task => {
          if (task.id === id) {
            task.edit = false
          }
        })
      }

      state.newTask = true
    },
    removeTask: (state, id) => {
      state.el.tasks = state.el.tasks.filter(task => task.id !== id)
    },
    increment: state => {
      state.id += 1
    }
  }
}
