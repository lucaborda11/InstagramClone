import * as React from 'react'

import logo from '../logo.svg'

interface IIntroProps{
    text?: string
}

interface IIntroState {
    text: string
    dato: number
}

export default class Header extends React.Component<IIntroProps, IIntroState> {
    public state = {
        text: 'No pasaste un choto',
        dato: 1,
    }
    
    public render() {
        const { text } = this.props
        const t = text ? text : this.state.text
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={this.handleClick}>
                {t}
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        )
    }

    private handleClick = () => {
        this.setState({ text: 'Actualizadisimo'})
    }
}