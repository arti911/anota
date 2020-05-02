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
      'hideModalDelete',
      'hideModalNote',
      'hideWrap',
      'removeColorWrap',
      'hideModalDeleteNote'
    ]),
    cancel () {
      if (this.modals.isModalDeleteNote) {
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
        this.hideModalDeleteNote()
        this.hideModalNote()
      }
    }
  }
}
</script>
