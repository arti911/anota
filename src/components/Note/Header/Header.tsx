import { Row, Col, Typography } from "antd";

import PopoverAnota from "../Popover";
import { IHeaderNote } from "./interface";

const { Title } = Typography;

const ellipsisSetting = {
  rows: 1,
  tooltip: true,
  expandable: true,
  symbol: <span></span>,
};

const HeaderNote = (props: IHeaderNote) => (
  <Row justify="space-between" align="middle" wrap={false}>
    <Col span="21">
      <Title level={4} ellipsis={ellipsisSetting} style={{ textAlign: "left" }}>
        {props.title}
      </Title>
    </Col>
    <Col span="3">
      <PopoverAnota
        placement="bottomRight"
        trigger="click"
        zIndex={999}
        content={props.contentPopover}
      />
    </Col>
  </Row>
);

export default HeaderNote;
