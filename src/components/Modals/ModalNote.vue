<template>
  <div class="modal">
    <label for="" class="modal__title">
      <input type="text" placeholder="Title" v-model.trim="newNote.title" v-focus>
    </label>
    <div class="modal__todo">
      <!-- {{ newNote.todos }} -->
      <Todo
        v-for="(todo, index) in newNote.todos"
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
      <button class="modal__btn modal__btn--save" @click="pushNote(newNote)" v-if="saveNote"></button>
      <button class="modal__btn modal__btn--cancel" @click="cancelNote(newNote)"></button>
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
      newNote: {
        id: Date.now(),
        title: '',
        todos: [],
        isOpenMenu: false
      },
      newTodo: {
        id: Date.now(),
        title: '',
        edit: true,
        done: false
      }
    }
  },
  watch: {
    newNote: {
      handler: function (val) {
        this.notes.activeNote = (val.title !== '' || val.todos.length !== 0) ? val.id : null
      },
      deep: true
    }
  },
  computed: {
    ...mapState([
      'notes'
    ]),
    saveNote () {
      return this.newNote.title !== '' && this.newNote.todos.length && this.isShowAdd
    }
  },
  methods: {
    ...mapMutations([
      'addNote',
      'hideModalNote',
      'hideWrap',
      'removeColorWrap',
      'showModalDeleteNote'
    ]),
    addTodo () {
      this.newTodo.title = ''
      this.newNote.todos.push(this.newTodo)
      this.isShowAdd = false
    },
    saveTodo (index, todo) {
      todo = {
        ...todo,
        id: Date.now(),
        edit: false
      }

      this.newNote.todos.splice(index, 1, todo)
      this.isShowAdd = true
    },
    cancelTodo (id) {
      this.newNote.todos = this.newNote.todos.filter(item => item.id !== id)
      this.isShowAdd = true
    },
    removeTodo (id) {
      this.newNote.todos = this.newNote.todos.filter(item => item.id !== id)
    },
    doneTodo (index, todo) {
      todo = todo.done ? {
        ...todo,
        done: false
      } : {
        ...todo,
        done: true
      }

      this.newNote.todos.splice(index, 1, todo)
    },
    pushNote (note) {
      this.addNote(note)
      this.hideWrap()
      this.removeColorWrap()
      this.hideModalNote()
    },
    cancelNote (el) {
      if (el.title !== '' || el.todos.length !== 0) {
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
