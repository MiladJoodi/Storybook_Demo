import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    color: 'blue',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    color: 'gray',
  },
};
export const WithLongText: Story = {
  args: {
    children: 'This is a very long button text to see how it looks',
    color: 'blue',
  },
};

export const WithClickAction: Story = {
  args: {
    children: 'Click me',
    color: 'blue',
    onClick: () => alert('Button clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    color: 'blue',
    disabled: true,
  },
};
