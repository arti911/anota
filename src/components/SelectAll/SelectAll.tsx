import { Button, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import { ISelectAll } from "./interface";

const { Text } = Typography;

const SelectAll = (props: ISelectAll) => {
  return (
    <>
      <Button
        type="primary"
        icon={<CheckOutlined />}
        shape="circle"
        size="large"
        onClick={props.handlers.selectAll}
      />
      <figcaption>
        <Text>Выбрать всё</Text>
      </figcaption>
    </>
  );
};

export default SelectAll;
