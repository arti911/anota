import { PopoverProps } from "antd";

import { IPopoverContent } from "../../PopoverContent/interface";

export interface IPopover extends PopoverProps {
  content: IPopoverContent;
};
