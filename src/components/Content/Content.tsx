import { Layout, Button, Row, Col, Empty } from "antd";
import { EditFilled } from "@ant-design/icons";
import arrayMove from "array-move";

import { SortableItem, SortableList } from "../Sortable/Sortable";
import Note from "../Note";

import { onToggleShow } from "../Modal/modalSlice";
import { saveNotesAfterSorting } from "../../appSlice";

import { useAppDispatch, useAppSelector } from "../../hook";

import { ISort } from "../../interfaces/Note/types";

import "./style.scss";

const { Content } = Layout;

const ContentAnota = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.anota.notes);
  const search = useAppSelector((state) => state.anota.search);

  const onShowModal = () => dispatch(onToggleShow(true));

  const onSortEnd = ({ oldIndex, newIndex }: ISort) => {
    dispatch(saveNotesAfterSorting(arrayMove(notes, oldIndex, newIndex)));
  };

  return (
    <Content className="anota-main">
      <Row gutter={[16, 24]}>
        {search.notes.length > 0
          ? (search.notes.map((item, index) => (
            <Col key={item.id} className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
              <Note index={index} {...item} />
            </Col>
          )))
          : search.value !== "" && search.notes.length === 0
          ? <Empty /> 
          : (
            <SortableList
              axis="xy"
              pressDelay={205}
              helperClass="anota-main__sort-list"
              onSortEnd={onSortEnd}
              useWindowAsScrollContainer={true}
            >
              <div style={{ display: "contents" }}>
                {notes.map((item, index) => (
                  <SortableItem key={item.id} index={index}>
                    <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
                      <Note index={index} {...item} />
                    </Col>
                  </SortableItem>
                ))}
              </div>
            </SortableList>
          )
        }
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
