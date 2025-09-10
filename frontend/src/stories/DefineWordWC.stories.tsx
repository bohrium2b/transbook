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
    <define-word word="充电">
      <p>充电<br/>
        <br />
        chōngdiàn
        <br />
        charge (a battery)</p>
    </define-word>
  ),
};

export const EmptyDefinition: Story = {
  render: () => (
    <define-word word="未知"></define-word>
  ),
};
