import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Confirm from '.';

import { ACTION_TYPE, list } from 'components/Actions/constants';

export default {
  title: 'Anota/Buttons/Confirm',
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => {
  const { title, textBtn, isCompleted, actionType, onConfirm, onAction } = args;

  return (
    <Confirm
      title={title}
      textBtn={textBtn}
      isCompleted={isCompleted}
      actionType={actionType}
      onConfirm={onConfirm}
      onAction={onAction}
    />
  );
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  title: `Вы действительно хотите сбросить отметки у ${list
    .filter((item) => item.isCheck)
    .map((item) => item.title)
    .join(', ')}?`,
  textBtn: 'Сбросить',
  isCompleted: true,
  icon: <ReloadOutlined />,
  actionType: ACTION_TYPE.RESET,
};

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  title: `Вы действительно хотите удалить ${list
    .filter((item) => item.isCheck)
    .map((item) => item.title)
    .join(', ')}?`,
  textBtn: 'Удалить',
  isCompleted: false,
  danger: true,
  icon: <DeleteOutlined />,
  actionType: ACTION_TYPE.REMOVE,
};
