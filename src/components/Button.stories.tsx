import React from 'react';
////Button component
import { Button ,BtnProps} from './Buttons';
///types
import {Story,Meta} from '@storybook/react/types-6-0';

export default{
    title: 'Button/Button',
    component: Button,
}as Meta

const Template:Story<BtnProps> = args => <Button {...args}/>;

export const BtnA = Template.bind({});
BtnA.args={
    bgColor: 'secondary',
    title: 'Submit',
    onclick:() => alert('Form validation submited successfully'),
}
export const BtnB = Template.bind({});
BtnB.args={
    ...BtnA.args,
    bgColor: 'primary'
} 