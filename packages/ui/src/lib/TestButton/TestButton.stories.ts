import {Meta, StoryObj} from '@storybook/react'

import TestButton from './TestButton'


type Story = StoryObj<typeof TestButton>

const meta: Meta<typeof TestButton> = {
    component: TestButton,
    title:'ui/TestButton',
}

export default meta


export const Default_State:Story = {
    args: {
        children:'Hi, Daniel!'
    }
}