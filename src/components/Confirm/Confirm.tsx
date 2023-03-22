import { Button, ButtonProps, Popconfirm, Typography } from 'antd';

import { SOLUTION } from 'components/Actions/constants';

const { Text } = Typography;

export interface ConfirmProps extends ButtonProps {
  title: string;
  textBtn: string;
  isCompleted: boolean;
  actionType: string;
  onConfirm: () => void;
  onAction: (value: string) => void;
}

const Confirm = (props: ConfirmProps) => {
  const { title, danger, isCompleted, icon, textBtn, actionType, onConfirm, onAction } = props;

  const onTypeAction = () => onAction(actionType);

  return (
    <>
      <Popconfirm title={title} okText={SOLUTION.YES} cancelText={SOLUTION.NO} onConfirm={onConfirm}>
        <Button
          danger={danger}
          disabled={!isCompleted}
          type="primary"
          icon={icon}
          onClick={onTypeAction}
          shape="circle"
          size="large"
        />
      </Popconfirm>
      <figcaption>
        <Text disabled={!isCompleted}>{textBtn}</Text>
      </figcaption>
    </>
  );
};

export default Confirm;
