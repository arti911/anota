import { Button, Typography } from "antd";

import { ICopy } from "./interface";

const { Text } = Typography;

const Copy = (props: ICopy) => {
  return (
    <>
      <Button
        disabled={!props.isCompleted}
        type="primary"
        className={props.className}
        shape="circle"
        size="large"
      >
        <Text copyable={props.handlers.copyableSettings} />
      </Button>
      <figcaption>
        <Text disabled={!props.isCompleted}>Скопировать</Text>
      </figcaption>
    </>
  );
};

export default Copy;
