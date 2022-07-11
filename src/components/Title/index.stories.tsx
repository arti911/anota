import { Meta, Story } from "@storybook/react";

import TitleModal from ".";
import { ITitle } from "./interface";

export default {
  title: "Anota/Components/Title",
  component: TitleModal,
} as Meta;

const Template: Story<ITitle> = (args) => <TitleModal {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: "Название 1",
  handlers: {
    setLocalTitle: (title: string): void => console.log("---title", title),
    setTitleHandler: (title: string): void => console.log("---title", title),
  },
};
