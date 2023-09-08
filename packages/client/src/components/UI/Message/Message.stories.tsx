import { Meta, StoryObj } from '@storybook/react';

import { Message } from './Message';

const meta: Meta<typeof Message> = {
    component: Message,
};
export default meta;

type Story = StoryObj<typeof Message>;


export const Success: Story = {
    args: {
        type: 'success',
        children: 'success message',
        showMessage: true,
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        children: 'error message',
        showMessage: true,
    },
};
export const Default: Story = {
    args: {
        type: '',
        children: 'default message',
        showMessage: true,
    },
};
