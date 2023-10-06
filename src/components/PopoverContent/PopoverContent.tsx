import { Button, Popconfirm, Typography } from "antd";

import { SOLUTION } from "../Actions/constants";

const { Text } = Typography;

interface PopoverContentProps {
  text: string;
  onClick: () => void;
  onConfirm: () => void;
}

const PopoverContent = (props: PopoverContentProps) => {
  const { text, onClick, onConfirm } = props;

  return (
    <>
      <Button type="text" block={true} onClick={onClick}>
        <Text type="success">Редактировать</Text>
      </Button>
      <Popconfirm
        title={`Удалить ${text}`}
        okText={SOLUTION.YES}
        cancelText={SOLUTION.NO}
        onConfirm={onConfirm}
      >
        <Button type="text" block={true}>
          <Text type="danger">Удалить</Text>
        </Button>
      </Popconfirm>
    </>
  );
};

export default PopoverContent;
