import { Meta, Story } from "@storybook/react";
import Actions from ".";

export default {
    title: "Anota/Components/ActionsNote",
    component: Actions,
} as Meta;

const Template: Story<any> = (args) => <Actions {...args} />;

export const ActionsNote = Template.bind({});