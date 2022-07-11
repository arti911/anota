import { List, Checkbox } from "antd";

import DragHandle from "../../DragHandle";

import { IListItem } from "./interface";

const { Item } = List;

const ListItem = (props: IListItem) => {
  return (
    <Item>
      {props.isSort && <DragHandle />}

      <Checkbox checked={props.isCheck} onChange={props.changeHandler}>
        {props.title}
      </Checkbox>
    </Item>
  );
};

export default ListItem;
