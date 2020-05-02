<template>
  <div class="wrapper-modal" :class="wrapperModal.color ? 'wrapper-modal--color' : ''">
    <div class="wrapper-modal__wrap" @click="hide"></div>
    <div class="wrapper-modal__double-wrap" v-if="modals.isModalDeleteNote" @click="hModalDeleteNote">
      <ModalDeleteConfirm />
    </div>
    <ModalDeleteConfirm v-if="modals.isModalDelete" />
    <ModalNote v-if="modals.isModalNote" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ModalDeleteConfirm from '@/components/Modals/ModalDeleteConfirm'
import ModalNote from '@/components/Modals/ModalNote'

export default {
  name: 'WrapperModal',
  components: {
    ModalDeleteConfirm,
    ModalNote
  },
  computed: {
    ...mapState([
      'notes',
      'modals',
      'wrapperModal'
    ])
  },
  methods: {
    ...mapMutations([
      'hideWrap',
      'hideModalDelete',
      'hideModalNote',
      'removeColorWrap',
      'hideModalDeleteNote',
      'showModalDeleteNote'
    ]),
    hModalDeleteNote () {
      if (this.modals.isModalDeleteNote) {
        this.hideModalDeleteNote()
      }
    },
    hide () {
      if (this.notes.activeNote && !this.notes.lists.find(item => item.id === this.notes.activeNote)) {
        this.showModalDeleteNote()
      } else if (this.modals.isModalNote) {
        this.hideModalNote()
        this.hideWrap()
      } else if (this.modals.isModalDelete) {
        this.hideModalDelete()

        this.removeColorWrap()
        this.notes.lists.map(item => {
          if (item.id === this.notes.activeNote) {
            item.isOpenMenu = true
          }
        })
      } else {
        this.notes.lists.map(item => {
          if (item.id === this.notes.activeNote) {
            item.isOpenMenu = false
          }
        })

        this.hideWrap()
        this.notes.activeNote = null
      }
    }
  }
}
</script>

<style lang="scss">
$wrapper-modal: wrapper-modal;

.#{$wrapper-modal} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  display: grid;
  grid-template-columns: minmax(320px, 500px);
  align-items: center;
  justify-content: center;
  transition: background-color .2s ease;

  & + .add-note {
    display: none;
  }

  &__wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 102;
  }

  &__double-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 105;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(#b2b0e7, .7);
  }

  &--color {
    background-color: rgba(#b2b0e7, .7);
  }
}
</style>
