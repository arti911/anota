<template>
  <div class="wrapper-modal" :class="wrapperModal.color ? 'wrapper-modal--color' : ''">
    <div class="wrapper-modal__wrap" @click="hide"></div>
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
      'removeColorWrap'
    ]),
    hide () {
      if (this.modals.isModalDelete || this.modals.isModalNote) {
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

  &--color {
    background-color: rgba(#b2b0e7, .7);
  }
}
</style>
