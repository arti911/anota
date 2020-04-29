<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
    </header>
    <main class="main">
      <router-view/>
    </main>
    <Modal v-if="modal.modalShow" />
    <button class="add-note" @click="show"></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  data: () => {
    return {}
  },
  computed: {
    ...mapState(
      ['modal']
    )
  },
  methods: {
    ...mapMutations([
      'showModal'
    ]),
    show () {
      this.showModal()
    }
  }
}
</script>
<style lang="scss">
#app {
  position: relative;
  height: 100vh;
  background-color: #f3f4f6;
}
</style>
