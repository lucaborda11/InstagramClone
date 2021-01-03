import { render } from '@testing-library/react'
import React from 'react'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',
    marginBottom:'10px'
}

const styleSpan = {
    fontSize: '10px',
    color: '#777',
    textTransform: 'uppercase',
    fontWeight: 900
} as React.CSSProperties

interface IInputProps {
    placeholder?: string
    label: string
}

export default class Input extends React.Component<IInputProps> {
    public render() {
        const {label} = this.props
        return (
            <div>
                <span style={styleSpan}>{label}</span>
                <input {...this.props} style={style}/>
            </div>
        )
    }
}