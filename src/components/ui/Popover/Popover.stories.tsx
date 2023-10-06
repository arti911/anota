import type { Meta, StoryObj } from "@storybook/react";

import Popover from ".";

const meta = {
  title: "components/ui/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: "bottomRight",
    trigger: "click",
    zIndex: 999,
    content: <span>I am content for Popover</span>,
    renderItem: <span>...</span>,
  }
};

