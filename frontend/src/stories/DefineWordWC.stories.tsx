
// ---FILEPATH /workspaces/transbook/frontend/src/stories/DefineWordWC.stories.tsx
import '../custom-elements.d.ts';

import type { Meta, StoryObj } from '@storybook/react';
import { DefineWordElement } from '../DefineWord.jsx';

// Ensure the custom element is defined
if (!customElements.get('define-word')) {
    customElements.define('define-word', DefineWordElement);
}


const meta: Meta<object> = {
  title: 'WebComponents/DefineWord',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <define-word word="人工智能">
      <b>人工智能</b>是指由计算机系统模拟人类智能的技术。
    </define-word>
  ),
};

export const LongDefinition: Story = {
  render: () => (
    <define-word word="翻译">
      <p><b>翻译</b>是将一种语言的内容转换为另一种语言的过程。它可以促进不同文化之间的交流与理解。</p>
    </define-word>
  ),
};

export const EmptyDefinition: Story = {
  render: () => (
    <define-word word="未知"></define-word>
  ),
};
