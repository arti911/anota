<template>
  <div class="wrapper-modal" :class="wrapperModal.color ? 'wrapper-modal--color' : ''">
    <div class="wrapper-modal__wrap" v-if="wrapperModal.isMenuNote" @click="closeMenuNote"></div>

    <div class="wrapper-modal__wrap" v-if="wrapperModal.isAddNote">
      <div class="wrapper-modal__close" @click="closeAddNote"></div>
      <ModalNote />
    </div>

    <div class="wrapper-modal__wrap" v-if="wrapperModal.isDeleteNote">
      <div class="wrapper-modal__close" @click="closeDeleteNote"></div>
      <ModalDeleteConfirm />
    </div>

    <div class="wrapper-modal__wrap" v-if="wrapperModal.isEditNote">
      <div class="wrapper-modal__close" @click="closeEditNote"></div>
      <ModalNote />
    </div>

    <div class="wrapper-modal__wrap wrapper-modal__wrap--confirm wrapper-modal--color" v-if="wrapperModal.isConfirmDeleteNote">
      <div class="wrapper-modal__close" @click="closeConfirmDeleteNote"></div>
      <ModalDeleteConfirm />
    </div>

    <div class="wrapper-modal__wrap wrapper-modal__wrap--confirm wrapper-modal--color" v-if="wrapperModal.isConfirmEditNote">
      <div class="wrapper-modal__close" @click="closeConfirmEditNote"></div>
      <ModalCancelEditing />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ModalCancelEditing from '@/components/Modals/ModalCancelEditing'
import ModalDeleteConfirm from '@/components/Modals/ModalDeleteConfirm'
import ModalNote from '@/components/Modals/ModalNote'

export default {
  name: 'WrapperModal',
  components: {
    ModalCancelEditing,
    ModalDeleteConfirm,
    ModalNote
  },
  computed: {
    ...mapState([
      'notes',
      'wrapperModal'
    ])
  },
  methods: {
    ...mapMutations([
      'removeColorWrap',
      'hideWrap',
      'hideMenuNote',
      'hideDeleteNote',
      'hideAddNote',
      'showConfirmDeleteNote',
      'hideConfirmDeleteNote',
      'showConfirmEditNote',
      'hideConfirmEditNote'
    ]),
    closeAddNote () {
      if (this.wrapperModal.newNote.title !== '' || this.wrapperModal.newNote.todos.length !== 0) {
        this.showConfirmDeleteNote()
      } else {
        this.hideAddNote()
        this.hideWrap()
      }
    },
    closeMenuNote () {
      this.notes.lists.map(item => {
        if (item.id === this.notes.activeNote) {
          item.isOpenMenu = false
        }
      })

      this.hideMenuNote()
      this.hideWrap()
      this.notes.activeNote = null
    },
    closeDeleteNote () {
      this.hideDeleteNote()
      this.removeColorWrap()
      this.notes.lists.map(item => {
        if (item.id === this.notes.activeNote) {
          item.isOpenMenu = true
        }
      })
    },
    closeConfirmDeleteNote () {
      this.hideConfirmDeleteNote()
    },
    closeEditNote () {
      this.showConfirmEditNote()
    },
    closeConfirmEditNote () {
      this.hideConfirmEditNote()
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
  transition: background-color .2s ease;

  & + .add-note {
    display: none;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 103;

    .modal {
      z-index: 105;
    }
  }

  &__wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: minmax(320px, 500px);
    align-items: center;
    justify-content: center;

    &--confirm {
      z-index: 104;
    }
  }

  &__menu-note {
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
