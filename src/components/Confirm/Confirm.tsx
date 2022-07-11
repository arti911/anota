import { Button, Popconfirm, Typography } from "antd";

import { IConfirm } from "./interface";

import { SOLUTION } from "../Actions/constants";

const { Text } = Typography;

const Confirm = (props: IConfirm) => {
  const onTypeAction = () => props.handlers.setTypeAction(props.actionType);

  return (
    <>
      <Popconfirm
        title={props.title}
        okText={SOLUTION.YES}
        cancelText={SOLUTION.NO}
        onConfirm={props.handlers.todosAction}
      >
        <Button
          danger={props.danger}
          disabled={!props.isCompleted}
          type="primary"
          icon={props.icon}
          onClick={onTypeAction}
          shape="circle"
          size="large"
        />
      </Popconfirm>
      <figcaption>
        <Text disabled={!props.isCompleted}>{props.textBtn}</Text>
      </figcaption>
    </>
  );
};

export default Confirm;
