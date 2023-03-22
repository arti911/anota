import { Button, Popconfirm, Typography } from 'antd';

import { SOLUTION } from 'components/Actions/constants';

const { Text } = Typography;

export interface PopoverContentProps {
  title: string;
  onClick: () => void;
  onConfirm: () => void;
}

export const PopoverContent = (props: PopoverContentProps) => {
  const { title, onClick, onConfirm } = props;

  return (
    <>
      <Button type="text" block onClick={onClick}>
        <Text type="success">Редактировать</Text>
      </Button>
      <Popconfirm title={`Удалить ${title}`} okText={SOLUTION.YES} cancelText={SOLUTION.NO} onConfirm={onConfirm}>
        <Button type="text" block>
          <Text type="danger">Удалить</Text>
        </Button>
      </Popconfirm>
    </>
  );
};
