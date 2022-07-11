export interface IListItem {
  title: string;
  isCheck: boolean;
  isSort?: boolean;
  isAction?: boolean;
  changeHandler?: () => void;
}
