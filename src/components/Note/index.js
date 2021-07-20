import { Checkbox, Typography, Popover, Button, List, Row, Col } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import PopoverNote from "./Popover";

import "./style.scss";

const { Title } = Typography;

const Note = (props) => {

  const ellipsisSetting = {
    rows: 1,
    tooltip: true,
    expandable: true,
    symbol: <span></span>,
  };

  return (
    <div className="note__card">
      <List
        dataSource={props.todos}
        renderItem={(item) => (
          <List.Item>
            <Checkbox checked={item.isCheck} key={item.id}>
              {item.title}
            </Checkbox>
          </List.Item>
        )}
        header={
          <Row justify="space-between" align="middle" wrap={false}>
            <Col span="21">
              <Title level={4} ellipsis={ellipsisSetting} style={{ textAlign: "left" }}>{props.title}</Title>
            </Col>
            <Col span="3">
              <Popover
                placement="bottomRight"
                trigger="click"
                content={
                  <PopoverNote {...props} />
                }
                zIndex="999"
              >
                <Button type="text" icon={<EllipsisOutlined />}></Button>
              </Popover>
            </Col>
          </Row>
        }
        footer={
          <>
            Done {props.todos.filter((item) => item.isCheck).length} of&nbsp;
            {props.todos.length}
          </>
        }
      ></List>
    </div>
  );
};

export default Note;
