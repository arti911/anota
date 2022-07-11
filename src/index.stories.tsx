import { Meta, Story } from "@storybook/react";
import App from "./App";

export default {
    title: "Anota/Layouts/Main",
    component: App,
} as Meta;

const Template: Story = () => <App />;

export const Main = Template.bind({});