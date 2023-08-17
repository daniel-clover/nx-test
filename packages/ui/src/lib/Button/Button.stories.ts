import {Meta, StoryObj} from '@storybook/react'

import {Button} from './Button'


type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
    component: Button,
    title:'ui/Button',
}

export default meta


export const Default_State:Story = {
    args: {
        children:'Hi, Igor!'
    }
}