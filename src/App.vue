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
      ['wrapperModal']
    )
  },
  methods: {
    ...mapMutations([
      'showWrap'
    ]),
    show () {
      this.showWrap(true)
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
