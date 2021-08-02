import { INote } from "../Note/types";

export interface INotes {
  notes: Array<INote>;
}

export interface ISortableNote {
  note: INote;
  indx?: number;
}