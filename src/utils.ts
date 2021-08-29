import { get } from "lodash";

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
