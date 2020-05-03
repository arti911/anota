<template>
  <div class="modal">
    <label for="" class="modal__title">
      <input type="text" placeholder="Title" v-model.trim="wrapperModal.newNote.title" v-focus>
    </label>
    <div class="modal__todo">
      <Todo
        v-for="(todo, index) in wrapperModal.newNote.todos"
        :key="todo.id"
        :todo="todo"
        v-model="todo.title"
        @save-todo="saveTodo(index, todo)"
        @cancel-todo="cancelTodo(todo.id)"
        @remove-todo="removeTodo(todo.id)"
        @done-todo="doneTodo(index, todo)"
      />
    </div>
    <button class="modal__add" @click="addTodo" v-if="isShowAdd">+ Add Todo</button>
    <div class="modal__btns">
      <button class="modal__btn modal__btn--save" @click="pushNote(wrapperModal.newNote)" v-if="saveNote"></button>
      <button class="modal__btn modal__btn--cancel" @click="cancelNote(wrapperModal.newNote)"></button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import autoFocus from '@/directives/autofocus'
import Todo from '@/components/Todo.vue'

export default {
  name: 'ModalNote',
  directives: {
    focus: autoFocus
  },
  components: {
    Todo
  },
  data: () => {
    return {
      isShowAdd: true,
      newTodo: {
        id: Date.now(),
        title: '',
        edit: true,
        done: false
      }
    }
  },
  mounted () {
    this.$store.watch(
      state => state.wrapperModal.newNote,
      value => {
        this.notes.activeNote = (value.title !== '' || value.todos.length !== 0) ? value.id : null
      },
      {
        deep: true
      }
    )
  },
  computed: {
    ...mapState([
      'notes',
      'wrapperModal'
    ]),
    saveNote () {
      return this.wrapperModal.newNote.title !== '' && this.wrapperModal.newNote.todos.length && this.isShowAdd
    }
  },
  methods: {
    ...mapMutations([
      'addNote',
      'hideWrap',
      'hideAddNote',
      'hideEditNote',
      'removeColorWrap',
      'showConfirmDeleteNote',
      'showConfirmEditNote',
      'defaultValue'
    ]),
    addTodo () {
      this.newTodo.title = ''
      this.wrapperModal.newNote.todos.push(this.newTodo)
      this.isShowAdd = false
    },
    saveTodo (index, todo) {
      if (todo.title !== '') {
        todo = {
          ...todo,
          id: Date.now(),
          edit: false
        }

        this.wrapperModal.newNote.todos.splice(index, 1, todo)
        this.isShowAdd = true
      }
    },
    cancelTodo (id) {
      this.wrapperModal.newNote.todos = this.wrapperModal.newNote.todos.filter(item => item.id !== id)
      this.isShowAdd = true
    },
    removeTodo (id) {
      this.wrapperModal.newNote.todos = this.wrapperModal.newNote.todos.filter(item => item.id !== id)
    },
    doneTodo (index, todo) {
      todo = todo.done ? {
        ...todo,
        done: false
      } : {
        ...todo,
        done: true
      }

      this.wrapperModal.newNote.todos.splice(index, 1, todo)
    },
    pushNote (note) {
      if (this.wrapperModal.isEditNote) {
        this.hideEditNote()
      }

      this.addNote(note)
      this.hideAddNote()
      this.hideWrap()
      this.removeColorWrap()
      this.defaultValue()
    },
    cancelNote (el) {
      if (this.wrapperModal.isEditNote) {
        this.showConfirmEditNote()
      } else if (this.wrapperModal.newNote.title !== '' || this.wrapperModal.newNote.todos.length !== 0) {
        this.showConfirmDeleteNote()
      } else {
        this.hideAddNote()
        this.hideWrap()
        this.removeColorWrap()
      }
    }
  }
}
</script>
