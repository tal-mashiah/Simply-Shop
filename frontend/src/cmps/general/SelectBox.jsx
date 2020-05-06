import React, { Component } from 'react'

export default class SelectBox extends Component {
    state = {
        title: null,
        isOptionsShown: false
    };

    componentDidMount() {
        this.setState({ title: this.props.options[0].value })
    }

    showOptions = () => {
        this.setState(prevState => ({
            isOptionsShown: !prevState.isOptionsShown
        }));
    }

    handleOptionClick = (option) => {
        this.setState({ title: option.value, isOptionsShown: false })
        if (option !== this.state.title) {
            this.props.handleChange(option.key);
        }
    }

    render() {
        const { title, isOptionsShown } = this.state;
        return (
            <div className="select-box">
                <div onClick={() => this.showOptions()} className={`title ${isOptionsShown ? 'active' : ''}`}>{title}</div>
                {!isOptionsShown ||
                    <div className={`options-container ${isOptionsShown ? 'active' : ''}`}>
                        {this.props.options.map((option, idx) => {
                            return <div key={idx} onClick={() => this.handleOptionClick(option)} className="option">{option.value}</div>
                        })}
                    </div>}
            </div>
        )
    }
}
