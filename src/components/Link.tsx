import { render } from '@testing-library/react'
import React from 'react'

const style = {
    color: 'blue',
    fontSize:'12px',
    padding: '15px'
}

export default class Link extends React.Component {
    public render() {
        return (
            <a {...this.props} style={style}/>
        )
    }
}