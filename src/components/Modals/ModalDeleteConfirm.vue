<template>
  <div class="modal">
    <div class="modal__title">Delete note?</div>
    <div class="modal__text">This action cannot be undone and the note will be deleted from your profile.</div>
    <div class="modal__btns">
      <button class="modal__btn modal__btn--cancel" @click="cancel"></button>
      <button class="modal__btn modal__btn--delete" @click="remove"></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ModalDeleteConfirm',
  computed: {
    ...mapState([
      'notes',
      'wrapperModal'
    ])
  },
  methods: {
    ...mapMutations([
      'hideWrap',
      'hideDeleteNote',
      'removeNote',
      'removeColorWrap',
      'hideConfirmDeleteNote',
      'hideAddNote',
      'defaultValue'
    ]),
    cancel () {
      if (this.wrapperModal.isConfirmDeleteNote) {
        this.hideConfirmDeleteNote()
      } else {
        this.hideDeleteNote()
        this.removeColorWrap()
        this.notes.lists.map(item => {
          if (item.id === this.notes.activeNote) {
            item.isOpenMenu = true
          }
        })
      }
    },
    remove () {
      if (this.wrapperModal.isConfirmDeleteNote) {
        this.defaultValue()
        this.hideConfirmDeleteNote()
        this.hideAddNote()
      } else {
        this.removeNote(this.notes.activeNote)
        this.notes.activeNote = null
      }

      this.hideWrap()
      this.hideDeleteNote()
    }
  }
}
</script>
