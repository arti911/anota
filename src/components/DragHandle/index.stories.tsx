import { Meta, Story } from "@storybook/react";

import DragHandle from ".";

export default {
    title: "Anota/Components/DragHandle",
    component: DragHandle,
} as Meta;

const Template: Story<any> = () => <DragHandle />;

export const DragHandleDefault = Template.bind({});
