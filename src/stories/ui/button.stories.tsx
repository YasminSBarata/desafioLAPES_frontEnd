import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/atoms/button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-screen items-center justify-center'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    children: 'Saiba mais...',
    disabled: false,
  },
};
