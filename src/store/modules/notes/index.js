export default {
  state: {
    lists: [
      {
        id: 0,
        title: 'Name',
        tasks: [
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
        ]
      }
    ]
  },
  mutations: {
    addNote: (state, note) => {
      console.log(note)
      state.lists.push(note)
    }
  }
}
