import { Row, Col, Typography, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import Popover from "components/ui/Popover";
import PopoverContent from "components/PopoverContent";

const { Title } = Typography;

const ellipsisSetting = {
  rows: 1,
  tooltip: true,
  expandable: true,
  symbol: <span></span>,
};

interface HeaderNoteProps {
  title: string;
  onClick: () => void;
  onConfirm: () => void;
}

const HeaderNote = (props: HeaderNoteProps) => {
  const { title, onClick, onConfirm } = props;

  return (
  <Row justify="space-between" align="middle" wrap={false}>
    <Col span="21">
      <Title level={4} ellipsis={ellipsisSetting} style={{ textAlign: "left" }}>
        {props.title}
      </Title>
    </Col>
    <Col span="3">
      <Popover
        placement="bottomRight"
        trigger="click"
        zIndex={999}
        content={<PopoverContent text={title} onClick={onClick} onConfirm={onConfirm} />}
        renderItem={<Button type="text" icon={<EllipsisOutlined />} />}
      />
    </Col>
  </Row>
)};

export default HeaderNote;
