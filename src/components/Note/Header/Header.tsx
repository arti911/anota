import { Row, Col, Typography } from 'antd';

import PopoverAnota from 'components/Note/Popover';
import { PopoverContentProps } from 'components/PopoverContent';

const { Title } = Typography;

const ellipsisSetting = {
  rows: 1,
  tooltip: true,
  expandable: true,
  symbol: <span />,
};
interface HeaderNoteProps {
  title: string;
  contentPopover: PopoverContentProps;
}

const HeaderNote = (props: HeaderNoteProps) => {
  const { title, contentPopover } = props;

  return (
    <Row justify="space-between" align="middle" wrap={false}>
      <Col span="21">
        <Title level={4} ellipsis={ellipsisSetting} style={{ textAlign: 'left' }}>
          {title}
        </Title>
      </Col>
      <Col span="3">
        <PopoverAnota placement="bottomRight" trigger="click" zIndex={999} data={contentPopover} />
      </Col>
    </Row>
  );
};

export default HeaderNote;
