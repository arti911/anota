import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalShow: false,
    notes: [
      {
        id: 0,
        title: '',
        tasks: [
          {
            id: 0,
            title: 'Study for test',
            done: false
          },
          {
            id: 1,
            title: 'Call Anne',
            done: true
          },
          {
            id: 2,
            title: 'Buy groceries',
            done: false
          },
          {
            id: 3,
            title: 'Clean th kitchen',
            done: false
          },
          {
            id: 4,
            title: 'Go for a run',
            done: true
          }
        ]
      }
    ]
  },
  mutations: {
    addNote: (state, note) => {
      state.notes.push(note)
    },
    showModal: state => {
      state.modalShow = true
    },
    hideModal: state => {
      state.modalShow = false
    }
  },
  actions: {
  },
  modules: {}
})
