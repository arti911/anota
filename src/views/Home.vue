<template>
  <div class="container">
    <Note v-for="note in notes.lists" :key="note.id" :noteEl="note" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Note from '@/components/Note'

export default {
  name: 'Main',
  components: {
    Note
  },
  computed: {
    ...mapState([
      'notes'
    ])
  },
  methods: {}
}
</script>
