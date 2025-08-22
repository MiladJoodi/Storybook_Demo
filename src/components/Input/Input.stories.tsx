import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onChange: { action: "change" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: "Full name",
    placeholder: "Type your name",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "your handle",
    error: "Username is taken",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    disabled: true,
  },
};

export const SizesSm: Story = {
  name: "Size: sm",
  args: {
    label: "Small",
    placeholder: "Small input",
    size: "sm",
  },
};

export const SizesMd: Story = {
  name: "Size: md",
  args: {
    label: "Medium",
    placeholder: "Medium input",
    size: "md",
  },
};

export const SizesLg: Story = {
  name: "Size: lg",
  args: {
    label: "Large",
    placeholder: "Large input",
    size: "lg",
  },
};
