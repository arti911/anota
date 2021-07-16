import { useDispatch, useSelector } from "react-redux";
import { Layout, Button, Row } from "antd";
import { EditFilled } from "@ant-design/icons";
import arrayMove from 'array-move';

import SortableListOfNotes from "../SortableListOfNotes";

import { onToggleShow } from "../Modal/modalSlice";
import { saveNotesAfterSorting } from "../../appSlice";

const { Content } = Layout;

const ContentAnota = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.anota);

  const onShowModal = () => dispatch(onToggleShow(true));

  const onSortEnd = ({oldIndex, newIndex}) => {
    dispatch(saveNotesAfterSorting(arrayMove(notes, oldIndex, newIndex)));
  };

  return (
    <Content className="anota__main">
      <Row gutter={[16, 24]}>
        <SortableListOfNotes notes={notes} axis="xy" pressDelay={205} onSortEnd={onSortEnd} useWindowAsScrollContainer={true} />
      </Row>
      <Button
        type="primary"
        shape="circle"
        icon={<EditFilled />}
        size="large"
        className="anota__btn-add-note"
        onClick={onShowModal}
      ></Button>
    </Content>
  );
};

export default ContentAnota;
