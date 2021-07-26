import { SortableElement } from "react-sortable-hoc";
import { Col } from "antd";

import Note from "../Note";

const SortableItemNote = SortableElement((props) => {
  return (
    <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
      <Note index={props.indx} {...props.note} />
    </Col>
  );
});

export default SortableItemNote;
