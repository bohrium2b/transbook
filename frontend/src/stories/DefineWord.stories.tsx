import type { Meta, StoryObj } from '@storybook/react';
import { DefineWord } from '../DefineWord';

const meta: Meta<typeof DefineWord> = {
  title: 'Components/DefineWord',
  component: DefineWord,
  tags: ['autodocs'],
  argTypes: {
    word: { control: 'text' },
    definition: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof DefineWord>;

export const Default: Story = {
  args: {
    word: '人工智能',
    definition: '<b>人工智能</b>是指由计算机系统模拟人类智能的技术。',
  },
};

export const LongDefinition: Story = {
  args: {
    word: '翻译',
    definition:
      '<p><b>翻译</b>是将一种语言的内容转换为另一种语言的过程。它可以促进不同文化之间的交流与理解。</p>',
  },
};

export const EmptyDefinition: Story = {
  args: {
    word: '未知',
    definition: '',
  },
};
