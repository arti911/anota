import { INote } from "../components/Note/interface";

export interface IApp {
  notes: INote[];
  search: ISearch;
}

interface ISearch {
  notes: INote[];
  value: string;
};

export interface ISortableNote {
  note: INote;
  indx?: number;
}