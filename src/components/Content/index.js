import { useDispatch, useSelector } from "react-redux";
import { Layout, Button, Row, Col, } from "antd";
import { EditFilled } from "@ant-design/icons";

import Note from "../Note";

import { onToggleShow } from "../Modal/modalSlice";

const { Content } = Layout;

const ContentAnota = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.anota);

  const onShowModal = () => dispatch(onToggleShow(true));

  return (
    <Content className="anota__main">
      <Row gutter={[16, 24]}>
        {notes.map((item, index) => (
          <Col
            className="note"
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
            key={item.id}
          >
            <Note {...item} index={index} />
          </Col>
        ))}
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
