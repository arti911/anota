<template>
  <div class="todo">
    <div class="todo__wrap" v-if="cuurentTodo" @click="cancleEditTodo(todo)"></div>

    <div class="check">
      <label>
        <input class="check__input" type="checkbox" @change="$emit('done-todo', $event.target.value)" :checked="todo.done">
        <span class="check__box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" fill="#fff">
            <path path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0 c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136 C513.921,95.666,513.921,83.198,506.231,75.508z" />
          </svg>
        </span>
        <div class="check__title" v-if="!todo.edit">
          {{ todo.title }}
        </div>
      </label>
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="check__value"
        @keyup.enter="$emit('save-todo')"
        v-focus
        v-if="todo.edit"
      >
      <div class="check__actions" v-else>
        <button class="check__burger" @click="cuurentTodo = todo.id">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="check__menu" v-if="cuurentTodo">
          <button class="check__menu-item check__menu-item--edit" @click="editTodo(todo)">Edit</button>
          <button
            class="check__menu-item check__menu-item--remove"
            @click="$emit('remove-todo')"
          >Remove</button>
        </div>
      </div>
    </div>

    <div class="todo__btns" v-if="todo.edit">
      <button
        class="todo__btn todo__btn--save"
        :disabled="value === ''"
        @click="$emit('save-todo')"
      ></button>
      <button
        class="todo__btn todo__btn--cancel"
        @click="$emit('cancel-todo')"
      ></button>
    </div>
    <!-- <div>{{ todo }}</div> -->
  </div>
</template>

<script>
import autoFocus from '@/directives/autofocus'

export default {
  props: ['todo', 'value'],
  directives: {
    focus: autoFocus
  },
  data: () => {
    return {
      cuurentTodo: null,
      oldValue: '',
      done: null
    }
  },
  computed: {},
  methods: {
    submit (val) {
      alert(val)
    },
    editTodo (todo) {
      this.oldValue = todo.title
      this.done = todo.done
      todo.edit = true
      this.cuurentTodo = true
    },
    cancleEditTodo (todo) {
      if (todo.edit) {
        todo.title = this.oldValue
        todo.done = this.done
        todo.edit = false
      }

      this.cuurentTodo = null
    }
  }
}
</script>

<style scoped lang="scss">
$todo: todo;

.#{$todo} {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;

  &--not-click {
    pointer-events: none;
    cursor: not-allowed;
  }

  &__name {
    border-bottom: 1px solid #0f2431;
  }

  &__wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 103;

    & + .check,
    & + .check + .todo__btns {
      z-index: 105;
    }
  }

  &__btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  &__btn {
    height: 30px;
    border-radius: 6px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &--save {
      background-color: rgb(23, 191, 99);
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" fill="white"%3E%3Cpath d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0 c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136 C513.921,95.666,513.921,83.198,506.231,75.508z"/%3E%3C/svg%3E');
      background-size: 10%;
    }

    &--cancel {
      background-color: rgb(224, 36, 94);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 329.26933 329' fill='white'%3E%3Cpath d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0'/%3E%3C/svg%3E");
      background-size: 7%;
    }
  }
}
</style>
