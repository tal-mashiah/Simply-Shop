import React, { Component } from 'react';
import { connect } from 'react-redux';

class Spinner extends Component {
    render() {

        return (
            <React.Fragment>
                {this.props.isLoading ? <div className='spinner flex justify-center align-center'>
                    <img src={require('../../assets/animation/spinner.png')} alt='spinner' />
                </div> : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.system.isLoading
    };
};

export default connect(mapStateToProps, null)(Spinner);



