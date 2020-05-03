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
      'modals'
    ])
  },
  methods: {
    ...mapMutations([
      'removeNote',
      'removeColorWrap',
      'hideWrap',
      'hideConfirm',
      'hideModalNote',
      'hideModalDelete',
      'hideModalDeleteNote',
      'defaultValue'
    ]),
    cancel () {
      if (this.modals.isModalDeleteNote) {
        this.hideConfirm()
        this.hideModalDeleteNote()
      } else {
        this.hideModalDelete()
        this.removeColorWrap()
        this.notes.lists.map(item => {
          if (item.id === this.notes.activeNote) {
            item.isOpenMenu = true
          }
        })
      }
    },
    remove () {
      this.removeNote(this.notes.activeNote)
      this.hideModalDelete()
      this.hideWrap()
      this.notes.activeNote = null

      if (this.modals.isModalDeleteNote) {
        this.hideConfirm()
        this.hideModalDeleteNote()
        this.hideModalNote()
        this.defaultValue()
      }
    }
  }
}
</script>
