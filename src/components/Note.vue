<template>
  <div class="note" ref="note">
    <header class="note__header">
      <h3 class="note__title">{{ noteEl.title }}</h3>
      <button class="note__burger" @click="open(noteEl.id)">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="note__menu" v-if="noteEl.isOpenMenu">
        <button class="note__menu-item note__menu-item--edit">Edit</button>
        <button class="note__menu-item note__menu-item--del" @click="openModalDelete(noteEl.id)">Delete</button>
      </div>
    </header>
    <div class="note__lists">
      <div class="note__lists-item" v-for="task in noteEl.tasks" :key="task.id">
        <label class="check">
            <input class="check__input" type="checkbox" :checked="task.done">
            <span class="check__box"></span>
            <div>{{ task.title }}</div>
          </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Note',
  props: ['noteEl'],
  data: () => {
    return {}
  },
  computed: {},
  methods: {
    ...mapMutations([
      'showWrap',
      'addColorWrap',
      'openMenu',
      'showModalDelete',
      'closeMenu'
    ]),
    open (id) {
      this.showWrap()
      this.openMenu(id)
    },
    openModalDelete (id) {
      this.addColorWrap()
      this.showModalDelete()
      this.closeMenu(id)
    }
  }
}
</script>

<style lang="scss">
$note: note;

.#{$note} {
  position: relative;
  display: grid;
  gap: 20px;
  padding: 15px;
  align-content: flex-start;
  background-color: #b5f4fa;
  border-radius: 6px;

  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__burger {
    display: flex;
    cursor: pointer;

    span {
      display: block;
      width: 7px;
      height: 7px;
      margin: 0 1.5px;
      border-radius: 50%;
      border: 1px solid #0f2431;
      transition: background-color .2s ease;
    }

    &:hover {
      span {
        background-color: #0f2431;
      }
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 103;
    overflow: hidden;
    background: #0f2431;
    border-radius: 6px;
  }

  &__menu-item {
    display: flex;
    width: 100%;
    padding: 15px;
font-weight: 700;
    font-size: 18px;
    transition: background-color .2s ease;
    cursor: pointer;

    &--edit {
      color: rgb(23, 191, 99);
    }

    &--del {
      color: rgb(224, 36, 94);
    }
  }

  &__lists {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  &__lists-item {
    pointer-events: none;
  }
}
</style>
