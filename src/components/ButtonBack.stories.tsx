import React from 'react';
///types
import {Story,Meta} from '@storybook/react/types-6-0';
///interface and ButtonBack components
import { ButtonBack ,BtnBackProps } from './ButtonBack';
///stories
import {BtnB} from './Button.stories';

export default{
    title: 'ButtonBack/ButtonBack',
    component: ButtonBack,
}as Meta
const Template:Story<BtnBackProps> = args => <ButtonBack {...args}/>;

export const BtnBack = Template.bind({});
BtnBack.args={
   ...BtnB.args,
   title:'Back',
   onClick:() => alert('Form validation submited successfully'),
} 