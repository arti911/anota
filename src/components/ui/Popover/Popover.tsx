import { Popover, PopoverProps } from "antd";
import { ReactElement, cloneElement } from "react";

interface PopoverCustomProps extends PopoverProps {
  renderItem: ReactElement<{ className?: string }>
}

const PopoverCustom = (props: PopoverCustomProps) => {
  const { placement, trigger, zIndex, content, renderItem } = props;

  return (
  <Popover
    placement={placement}
    trigger={trigger}
    zIndex={zIndex}
    content={content}
  >
    {cloneElement(renderItem, {...renderItem.props})}
  </Popover>
)};

export default PopoverCustom;
