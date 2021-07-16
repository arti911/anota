// import { forwardRef } from "react";
import { SortableContainer } from "react-sortable-hoc";

import { List } from "antd";
import SortableItem from "../SortableItem";

const SortableList = SortableContainer((props) => (
    <List
      dataSource={props.todos}
      renderItem={(item, index) => (
        <SortableItem
          todos={props.todos}
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
));

export default SortableList;
