import { Checkbox, Typography, Popover, Button, List, Row, Col } from "antd";
import { EllipsisOutlined, EyeOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import classname from "classnames";

import PopoverNote from "./Popover";

import "./style.scss";
import { INote } from "../../interfaces/Note/types";

const { Title } = Typography;

const ellipsisSetting = {
  rows: 1,
  tooltip: true,
  expandable: true,
  symbol: <span></span>,
};

const Note = (props: INote) => {
  const [ showNote, setShowNote ] = useState(!props.isVisibleNote);
  const [ height, setHeight ] = useState(0);

  const cardContentRef: any = useRef(null);

  const rootClass = classname("note__card", {
    "note__card--flip": showNote,
  });

  const onShowNote = useCallback(() => {
    setShowNote(!showNote)
  }, [ showNote ]);

  
  useEffect(() => {
    setHeight(cardContentRef?.current?.firstElementChild.offsetHeight);
  }, []);

  return (
    <div className={rootClass} style={{ minHeight: `${height}px` }}>
      <div className="note__wrapper note__wrapper--front" ref={cardContentRef}>
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
                  zIndex={999}
                >
                  <Button type="text" icon={<EllipsisOutlined />}></Button>
                </Popover>
              </Col>
            </Row>
          }
          footer={
            <>
              <div />
              <div style={{ textAlign: "center" }}>
                Done {props.todos.filter((item) => item.isCheck).length} of&nbsp; {props.todos.length}
              </div>
              <div>
                { !props.isVisibleNote && <Button type="text" icon={<EyeOutlined />} onClick={onShowNote} /> }
              </div>
            </>
          }
        ></List>
      </div>
      <div className="note__wrapper note__wrapper--back" onClick={onShowNote}>
        <Button type="text" size="large" icon={<EyeOutlined />} />
      </div>
    </div>
  );
};

export default Note;
