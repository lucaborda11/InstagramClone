import { render } from '@testing-library/react'
import React from 'react'

const style = {
    alignItems: 'center',
    backgroundColor: '#eee',
    display: 'flex',
    height: 'calc(100vh - 20px)',
    justifyContent: 'center',
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
}

export default class Conatiner extends React.Component {
    public render() {
        const { children } = this.props
        return (
            <div style={style}>
                {children}
            </div>
        )
    }
}