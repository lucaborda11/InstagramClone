import { render } from '@testing-library/react'
import React from 'react'

const style = (block: boolean) => ({
    backgroundColor: '#00D182',
    border: '0px',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    color: '#fff',
    width: block ? '100%' : undefined,
})

interface IButton {
    block?: boolean
}

export default class Button extends React.Component<IButton> {
    public render() {
        const { block = false } = this.props
        return (
            <button {...this.props} style={style(block)}/>
        )
    }
}