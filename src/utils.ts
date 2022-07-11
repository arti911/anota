import { get } from "lodash";

import { INote } from "./components/Note/interface";

export const fetchNotes = () => {
  try {
    const response = localStorage.getItem("vuex");

    if (response) {
      return get(JSON.parse(response), "notes.lists", []);
    }
  } catch (e) {
    console.log(e);
  }
};

export const searchNotesFn = (notes: Array<INote>, value: string): Array<INote> => {
  return notes.filter((item) => (
    item.title.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase())
    || item.todos.some((todo) => todo.title.toLocaleLowerCase().trim().includes(value.toLocaleLowerCase()))
  ));
}