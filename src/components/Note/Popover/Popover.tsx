import { Button, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import PopoverContent from "../../PopoverContent";

const PopoverAnota = (props: any) => (
  <Popover
    placement={props.placement}
    trigger={props.trigger}
    zIndex={props.zIndex}
    content={<PopoverContent {...props.content} />}
  >
    <Button type="text" icon={<EllipsisOutlined />}></Button>
  </Popover>
);

export default PopoverAnota;
