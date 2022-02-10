import { Meta, Story } from "@storybook/react";
import AddModal from ".";

export default {
    title: "Anota/Components/Modal",
    component: AddModal,
} as Meta;

const Template: Story<any> = () => <AddModal />;

export const Modal = Template.bind({});
