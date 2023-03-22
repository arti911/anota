import { List, Checkbox } from 'antd';

import DragHandle from 'components/DragHandle';

const { Item } = List;

interface ListItemProps {
  title: string;
  isCheck: boolean;
  isSort: boolean;
  // isAction: boolean;
  onChange: () => void;
}

const ListItem = (props: ListItemProps) => {
  const { isSort, isCheck, title, onChange } = props;
  return (
    <Item>
      {isSort && <DragHandle />}

      <Checkbox checked={isCheck} onChange={onChange}>
        {title}
      </Checkbox>
    </Item>
  );
};

export default ListItem;
