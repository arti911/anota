import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import modals from './modules/modals'
import wrapperModal from './modules/wrapper_modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    modals,
    wrapperModal
  }
})
