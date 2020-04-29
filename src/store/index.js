import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import note from './modules/note'
import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    note,
    modal
  }
})
