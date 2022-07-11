import { Meta, Story } from "@storybook/react";
import ContentAnota from ".";

export default {
    title: "Anota/Components/Content",
    component: ContentAnota,
} as Meta;

const Template: Story<any> = () => <ContentAnota />;

export const ContentApp = Template.bind({});
