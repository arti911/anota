import { NoteProps } from './components/Note/Note';

interface FetchReturn {
  notes: {
    list: NoteProps[];
  };
}

export const fetchNotes = (): NoteProps[] => {
  const response = localStorage.getItem('vuex');

  if (response) {
    const {
      notes: { list },
    } = JSON.parse(response) as FetchReturn;

    return list;
  }

  throw new Error('Ой');
};

export const searchNotesFn = (notes: NoteProps[], value: string): NoteProps[] => {
  return notes.filter(
    (item) =>
      item.title.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase()) ||
      item.todos.some((todo) => todo.title.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase()))
  );
};
