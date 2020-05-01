<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <WrapperModal v-if="wrapperModal.isShow" />
    <button class="add-note" @click="show"></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import WrapperModal from '@/components/WrapperModal.vue'

export default {
  components: {
    WrapperModal
  },
  computed: {
    ...mapState(
      [
        'notes',
        'wrapperModal'
      ]
    )
  },
  methods: {
    ...mapMutations([
      'showWrap',
      'showModalNote'
    ]),
    show () {
      this.showWrap(true)
      this.showModalNote()
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
