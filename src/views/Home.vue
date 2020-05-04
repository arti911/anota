<template>
  <transition-group class="container" tag="div" name="note">
    <Note v-for="note in notes.lists" :key="note.id" :noteEl="note" />
  </transition-group>
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
