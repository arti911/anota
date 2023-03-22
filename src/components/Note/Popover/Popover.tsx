import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Popover, PopoverProps } from 'antd';

import { PopoverContent, PopoverContentProps } from 'components/PopoverContent';

interface PopoverAnotaProps extends PopoverProps {
  data: PopoverContentProps;
}

const PopoverAnota = (props: PopoverAnotaProps) => {
  const { placement, trigger, zIndex, data } = props;
  return (
    <Popover
      placement={placement}
      trigger={trigger}
      zIndex={zIndex}
      content={<PopoverContent title={data.title} onClick={data.onClick} onConfirm={data.onConfirm} />}
    >
      <Button type="text" icon={<EllipsisOutlined />} />
    </Popover>
  );
};

export default PopoverAnota;
