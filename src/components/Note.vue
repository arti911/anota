<template>
  <div class="note">
    <header class="note__header">
      <h3 class="note__title">{{ noteEl.title }}</h3>
      <button class="note__burger" @click="open(noteEl.id)">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="note__menu" v-if="noteEl.isOpenMenu">
        <button class="note__menu-item note__menu-item--edit" @click="openModalNote(noteEl)">Edit</button>
        <button class="note__menu-item note__menu-item--del" @click="openModalDelete(noteEl.id)">Delete</button>
      </div>
    </header>
    <vue-scroll :ops="ops" class="note__lists">
      <div class="note__lists-item" v-for="task in noteEl.todos" :key="task.id">
        <div class="check">
          <label>
            <span class="check__box" :class="task.done ? 'check__box--checked' : ''">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" fill="#fff">
                <path path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0 c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136 C513.921,95.666,513.921,83.198,506.231,75.508z" />
              </svg>
            </span>
            <div>{{ task.title }}</div>
          </label>
        </div>
      </div>
    </vue-scroll>
    <footer class="note__footer">Done {{ done(noteEl) }} of {{ noteEl.todos.length }}</footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Note',
  props: ['noteEl'],
  data: () => {
    return {
      ops: {
        rail: {
          background: '#0f2431',
          opacity: 0.5,
          size: '5px',
          gutterOfEnds: null,
          gutterOfSide: '2px',
          keepShow: false,
          specifyBorderRadius: false
        },
        bar: {
          keepShow: true,
          background: '#fff',
          specifyBorderRadius: false,
          opacity: 1,
          minSize: 0.2,
          size: '5px'
        }
      }
    }
  },
  methods: {
    ...mapMutations([
      'openMenu',
      'closeMenu',
      'showWrap',
      'showMenuNote',
      'showEditNote',
      'showDeleteNote',
      'addColorWrap'
    ]),
    open (id) {
      this.showWrap()
      this.showMenuNote()
      this.openMenu(id)
    },
    openModalNote (el) {
      this.showWrap(true)
      this.closeMenu(el.id)
      this.showEditNote(el)
    },
    openModalDelete (id) {
      this.addColorWrap()
      this.showDeleteNote()
      this.closeMenu(id)
    },
    done: (el) => {
      return el.todos.filter(item => item.done).length
    }
  }
}
</script>

<style lang="scss">
$note: note;

.#{$note} {
  position: relative;
  display: grid;
  grid-column: 1/-1;
  gap: 20px;
  grid-template-rows: auto 1fr auto;
  padding: 15px;
  align-content: flex-start;
  background-color: #b5f4fa;
  border-radius: 6px;
  box-shadow: 0px 10px 15px -15px #0f2431;

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 4;
  }

  @media (min-width: 1280px) {
    grid-column: span 3;
  }

  &:nth-child(even) {
    background-color: #8dabe5;
  }

  &:nth-child(3n) {
    background-color: #b2b0e7;
  }

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
    height: auto!important;

    .__view {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      align-content: flex-start;
    }
  }

  &__lists-item {
    pointer-events: none;
  }
}
</style>
