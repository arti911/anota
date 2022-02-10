import { Button, Popconfirm, Typography } from "antd";

import { SOLUTION } from "../Actions/constants";
import { IPopoverContent } from "./interface";

const { Text } = Typography;

const PopoverContent = (props: IPopoverContent) => {
  return (
    <>
      <Button type="text" block={true} onClick={props.clickHandler}>
        <Text type="success">Редактировать</Text>
      </Button>
      <Popconfirm
        title={`Удалить ${props.data.title}`}
        okText={SOLUTION.YES}
        cancelText={SOLUTION.NO}
        onConfirm={props.confirmHandler}
      >
        <Button type="text" block={true}>
          <Text type="danger">Удалить</Text>
        </Button>
      </Popconfirm>
    </>
  );
};

export default PopoverContent;
