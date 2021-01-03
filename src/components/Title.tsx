import { render } from '@testing-library/react'
import React from 'react'

const style = {
    color: '#551',
}

export default class Title extends React.Component {
    public render() {
        const { children } = this.props
        return (
            <h2 {...this.props} style={style} />
        )
    }
}