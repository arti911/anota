<template>
  <div class="home">
    <div class="note" v-for="note in notes" :key="note.id">
      <h3 class="note__title" v-if="note.title">{{ note.title }}</h3>
      <div class="note__tasks">
        <div class="note__task" v-for="task in note.tasks" :key="task.id">
          <label class="check">
            <input class="check__input" type="checkbox" :checked="task.done">
            <span class="check__box"></span>
            <div >{{task.title}}</div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'notes'
    ])
  },
  methods: {
    ...mapMutations([
      'showModal'
    ]),
    show () {
      this.showModal()
    }
  }
}
</script>

<style lang='scss'>
$home: home;
$note: note;

.#{$home} {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.#{$note} {
  display: grid;
  gap: 20px;
  align-content: flex-start;
  padding: 15px;
  background-color: #b5f4fa;
  border-radius: 6px;

&__tasks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  &__task {
    pointer-events: none;
  }
}
</style>
