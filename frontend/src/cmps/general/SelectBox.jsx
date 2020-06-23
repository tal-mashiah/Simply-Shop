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
            this.props.handleChange(option);
        }
    }

    onSelectBoxBlur = () => {
        this.setState({ isOptionsShown: false })
    }

    render() {
        const { title, isOptionsShown } = this.state;
        return (
            <div className="select-box" onBlur={this.onSelectBoxBlur} tabIndex="0" >
                <div onClick={() => this.showOptions()} className={`title-container flex justify-between ${isOptionsShown ? 'active' : ''}`}>
                    <div className="title">{title}</div>
                    <i className="fas fa-caret-down"></i>
                </div>
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
