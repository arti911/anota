import { INote } from "../Note/types";

interface ISearch {
  notes: Array<INote>;
  value: string;
};
export interface INotes {
  notes: Array<INote>;
  search: ISearch;
}

export interface ISortableNote {
  note: INote;
  indx?: number;
}