<template>
  <div class="modal">
    <label for="" class="modal__title">
      <input type="text" placeholder="Title" v-model.trim="modals.newNote.title" v-focus>
    </label>
    <div class="modal__todo">
      {{ modals.newNote }}
      <Todo
        v-for="(todo, index) in modals.newNote.todos"
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
      <button class="modal__btn modal__btn--save" @click="pushNote(modals.newNote)" v-if="saveNote"></button>
      <button class="modal__btn modal__btn--cancel" @click="cancelNote(modals.newNote)"></button>
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
      state => state.modals.newNote,
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
      'modals'
    ]),
    saveNote () {
      return this.modals.newNote.title !== '' && this.modals.newNote.todos.length && this.isShowAdd
    }
  },
  methods: {
    ...mapMutations([
      'addNote',
      'showConfirm',
      'showModalDeleteNote',
      'showModalCancelEditing',
      'hideWrap',
      'hideModalNote',
      'removeColorWrap',
      'defaultValue'
    ]),
    addTodo () {
      this.newTodo.title = ''
      this.modals.newNote.todos.push(this.newTodo)
      this.isShowAdd = false
    },
    saveTodo (index, todo) {
      todo = {
        ...todo,
        id: Date.now(),
        edit: false
      }

      this.modals.newNote.todos.splice(index, 1, todo)
      this.isShowAdd = true
    },
    cancelTodo (id) {
      this.modals.newNote.todos = this.modals.newNote.todos.filter(item => item.id !== id)
      this.isShowAdd = true
    },
    removeTodo (id) {
      this.modals.newNote.todos = this.modals.newNote.todos.filter(item => item.id !== id)
    },
    doneTodo (index, todo) {
      todo = todo.done ? {
        ...todo,
        done: false
      } : {
        ...todo,
        done: true
      }

      this.modals.newNote.todos.splice(index, 1, todo)
    },
    pushNote (note) {
      this.addNote(note)
      this.hideWrap()
      this.removeColorWrap()
      this.hideModalNote()
      this.defaultValue()
    },
    cancelNote (el) {
      const index = this.notes.lists.findIndex(item => item.id === el.id)

      if (index >= 0) {
        this.showConfirm()
        this.showModalCancelEditing()
      } else if (el.title !== '' || el.todos.length !== 0) {
        this.showConfirm()
        this.showModalDeleteNote()
      } else {
        this.hideWrap()
        this.removeColorWrap()
        this.hideModalNote()
      }
    }
  }
}
</script>
