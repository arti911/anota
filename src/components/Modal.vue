<template>
  <div class="modal">
    <div class="modal__wrapper" @click="closeModal"></div>
    <div class="modal__wrap">
      {{note.el.tasks}}
      <div class="modal__window">
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
      </div>
      <div class="modal__btns">
        <button class="modal__btn modal__btn--delete"></button>
        <button class="modal__btn modal__btn--save" @click="saveNote" v-if="saveNoteDisabeled"></button>
        <button class="modal__btn modal__btn--cancel" @click="closeModal"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import autoFocus from '@/directives/autofocus'
import CreateTask from '@/components/CreateTask.vue'

export default {
  name: 'Modal',
  directives: {
    focus: autoFocus
  },
  components: {
    CreateTask
  },
  data: () => {
    return {
      id: 1
    }
  },
  computed: {
    ...mapState([
      'note',
      'notes'
    ]),
    ...mapGetters([
      'saveNoteDisabeled'
    ])
  },
  methods: {
    ...mapMutations([
      'addTask',
      'saveTask',
      'editTask',
      'cancelTask',
      'removeTask',
      'addNote',
      'increment',
      'hideModal'
    ]),
    add () {
      this.addTask()
    },
    save (arg) {
      this.saveTask(arg)
    },
    edit (id) {
      this.editTask(id)
    },
    cancel (arg) {
      this.cancelTask(arg)
    },
    remove (id) {
      this.removeTask(id)
    },
    saveNote () {
      const notes = this.notes.lists
      let note = this.note.el
      const id = this.note.id

      const found = notes.find(item => item.id === note.id)

      if (found) {
        note = {
          ...{
            title: this.note.el.title,
            tasks: this.note.el.tasks
          }
        }
      } else {
        const newNote = {
          id: id,
          title: this.note.el.title,
          tasks: this.note.el.tasks
        }
        this.increment()
        this.addNote(newNote)
      }

      this.closeModal()
    },
    closeModal () {
      this.note.el = {
        id: null,
        title: '',
        tasks: []
      }
      this.note.newTask = true
      this.note.count = 0
      this.hideModal()
    }
  }
}
</script>

<style lang='scss'>
$modal: modal;

.#{$modal} {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(#b2b0e7, .7);

  &__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
  }

  &__wrap {
    display: grid;
    gap: 20px;
    max-width: 500px;
    width: 100%;
    max-height: 100%;
    z-index: 101;
  }

  &__window {
    display: grid;
    justify-items: baseline;
    gap: 20px;
    width: 100%;
    overflow: auto;
    border-radius: 6px;
    padding: 20px;
    background-color: white;
  }

  &__title {
    display: block;
    width: 100%;

    input {
      width: 100%;
      height: 100%;
      font-size: 22px;
    }
  }

  & + .add-note {
    display: none;
  }

  &__tasks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    width: 100%;
  }

  &__btns {
    display: grid;
    grid-template-columns: repeat(3, 55px);
    grid-auto-rows: 55px;
    justify-content: center;
    gap: 20px;
  }

  &__btn {
    border-radius: 50%;
    background-color: #0f2431;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    box-shadow: 2.5px 2.5px 10px #0f2431;
    cursor: pointer;
    transition: box-shadow .2s ease;

    &:hover {
      box-shadow: 2.5px 2.5px 10px transparent;
    }

    &--save {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='white'%3E%3Cpath d='m505.41 144.476-137.886-137.886c-4.25-4.25-9.9-6.59-15.91-6.59s-11.66 2.341-15.909 6.59c-4.25 4.25-6.591 9.9-6.591 15.91s2.341 11.66 6.59 15.91l15.58 15.58-119.957 106.281c-24.641-5.338-50.396-4.701-74.742 1.879-26.421 7.14-50.674 21.201-70.135 40.663-1.407 1.406-2.197 3.314-2.197 5.303s.79 3.897 2.197 5.303l90.156 90.156-159.409 159.408c-11.09 11.09-17.197 25.834-17.197 41.517 0 4.142 3.358 7.5 7.5 7.5 15.683 0 30.427-6.107 41.517-17.197l159.409-159.409 90.156 90.156c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c19.461-19.461 33.521-43.713 40.662-70.135 6.58-24.348 7.217-50.102 1.879-74.742l106.281-119.958 15.579 15.579c4.25 4.25 9.9 6.59 15.91 6.59s11.661-2.341 15.909-6.59c4.25-4.25 6.591-9.9 6.591-15.91-.001-6.008-2.342-11.658-6.591-15.908zm-467 339.721c-6.27 6.27-14.109 10.4-22.632 12.025 1.625-8.523 5.756-16.362 12.025-22.632l159.409-159.409 10.607 10.607zm265.339-74.692-201.254-201.254c34.561-31.19 81.416-43.425 127.142-32.974l107.087 107.088c10.448 45.726-1.786 92.58-32.975 127.14zm191.054-243.816c-1.416 1.417-3.3 2.196-5.303 2.196s-3.887-.78-5.303-2.197l-95.459-95.458c-2.93-2.928-7.678-2.93-10.607 0-2.929 2.929-2.929 7.678 0 10.606l69.254 69.254-104.159 117.563-98.878-98.878 122.846-108.841c1.548-1.372 2.461-3.321 2.522-5.387.063-2.067-.73-4.068-2.192-5.53l-21.214-21.214c-1.416-1.417-2.196-3.3-2.196-5.303s.78-3.886 2.197-5.303c1.416-1.417 3.3-2.197 5.303-2.197s3.887.78 5.303 2.197l137.887 137.886c1.416 1.417 2.196 3.3 2.196 5.303s-.78 3.886-2.197 5.303z'/%3E%3C/svg%3E");
    }

    &--cancel {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 329.26933 329' fill='white'%3E%3Cpath d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0'/%3E%3C/svg%3E");
    }

    &--delete {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-47 0 512 512' fill='white'%3E%3Cpath d='m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0'/%3E%3Cpath d='m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0'/%3E%3Cpath d='m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0'/%3E%3Cpath d='m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0'/%3E%3C/svg%3E");
    }
  }
}
</style>
