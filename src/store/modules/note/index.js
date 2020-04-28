export default {
  state: {
    title: '',
    tasks: [],
    newTask: true,
    count: 0
  },
  mutations: {
    addTask: state => {
      state.tasks.push({
        id: state.count,
        title: '',
        done: false,
        edit: true
      })
      state.count += 1
      state.newTask = false
    },
    saveTask: (state, arg) => {
      const [
        id,
        title,
        edit
      ] = arg

      if (title !== '') {
        state.tasks.map(task => {
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

      state.tasks.map(task => {
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
        state.tasks = state.tasks.filter(task => task.id !== id)
      } else {
        state.tasks.map(task => {
          if (task.id === id) {
            task.edit = false
          }
        })
      }

      state.newTask = true
    },
    removeTask: (state, id) => {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    saveNote: state => {
      const note = {
        id: Date.now(),
        title: state.title,
        tasks: state.tasks
      }
      console.log(note)
      // this.addNote(note)
      // this.modalHide()
    }
  }
}
