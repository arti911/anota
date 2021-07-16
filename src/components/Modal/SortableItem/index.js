import { SortableElement } from "react-sortable-hoc";

import TodoModal from "../Todo";

const SortableItem = SortableElement((props) => (
  <TodoModal
    todos={props.todos}
    todo={props.todo}
    index={props.indx}
    setTodoTitleHandler={props.setTodoTitleHandler}
    setCurrentTodoHandler={props.setCurrentTodoHandler}
  />
));

export default SortableItem;
