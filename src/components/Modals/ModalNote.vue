<template>
  <div class="modal">
    <label for="" class="modal__title">
      <input type="text" placeholder="Title" v-model="note.el.title" v-focus>
    </label>
    <div class="modal__tasks">
      <CreateTask
        v-for="task in note.el.tasks"
        :class="!note.newTask && !task.edit ? 'task--not-click' : ''"
        :key="task.id"
        :task="task"
        v-model="task.done"
        @save-task="save"
        @edit-task="edit"
        @cancel-task="cancel"
        @remove-task="remove"
      />
    </div>
    <button @click="add" v-if="note.newTask">+ Task</button>
    <div class="modal__btns">
      <!-- <button class="modal__btn modal__btn--delete"></button> -->
      <button class="modal__btn modal__btn--save" @click="saveNote" v-if="saveNoteDisabeled"></button>
      <button class="modal__btn modal__btn--cancel" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
import autoFocus from '@/directives/autofocus'
import CreateTask from '@/components/CreateTask.vue'

export default {
  name: 'ModalNote',
  directives: {
    focus: autoFocus
  },
  components: {
    CreateTask
  }
}
</script>
