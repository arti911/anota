import { List } from "antd";
import { SortableContainer } from "react-sortable-hoc";
import { useSelector } from "react-redux";

import SortableItem from "../SortableItem";

const SortableList = SortableContainer((props) => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <List
      dataSource={todos}
      renderItem={(item, index) => (
        <SortableItem
          todo={item}
          indx={index}
          setTodoTitleHandler={props.setTodoTitleHandler}
          setCurrentTodoHandler={props.setCurrentTodoHandler}
          index={index}
          key={item.id}
          ref={props.itemRef}
        />
      )}
    />
  )
});

export default SortableList;
