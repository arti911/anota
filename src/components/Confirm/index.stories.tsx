import { Meta, Story } from "@storybook/react";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";

import Confirm from ".";

import { IConfirm } from "./interface";
import { ACTION_TYPE, list, isCompleted } from "../Actions/constants";

export default {
  title: "Anota/Buttons/Confirm",
  component: Confirm,
} as Meta;

const Template: Story<IConfirm> = (args) => <Confirm {...args} />;

export const ResetButton = Template.bind({});
ResetButton.args = {
  title: `Вы действительно хотите сбросить отметки у ${list
    .filter((item) => item.isCheck)
    .map((item) => item.title)
    .join(", ")}?`,
  textBtn: "Сбросить",
  isCompleted,
  icon: <ReloadOutlined />,
  actionType: ACTION_TYPE.RESET,
  handlers: {
    setTypeAction: (type: string): void => console.log("---type", type),
  },
};

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  title: `Вы действительно хотите удалить ${list
    .filter((item) => item.isCheck)
    .map((item) => item.title)
    .join(", ")}?`,
  textBtn: "Удалить",
  isCompleted,
  danger: true,
  icon: <DeleteOutlined />,
  actionType: ACTION_TYPE.REMOVE,
  handlers: {
    setTypeAction: (type: string): void => console.log("---type", type), 
  },
};
