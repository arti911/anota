<template>
  <div class="modal">
    <div class="modal__title">Cancel editing?</div>
    <div class="modal__text">This action cannot be undone, and the note will remain unchanged.</div>
    <div class="modal__btns">
      <button class="modal__btn modal__btn--cancel" @click="cancel"></button>
      <button class="modal__btn modal__btn--delete" @click="remove"></button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ModalCamcelEditing',
  methods: {
    ...mapMutations([
      'hideConfirm',
      'hideModalCancelEditing',
      'hideWrap',
      'defaultValue'
    ]),
    cancel () {
      this.hideConfirm()
      this.hideModalCancelEditing()
    },
    remove () {
      this.hideWrap()
      this.hideConfirm()
      this.hideModalCancelEditing()
      this.defaultValue()
    }
  }
}
</script>
