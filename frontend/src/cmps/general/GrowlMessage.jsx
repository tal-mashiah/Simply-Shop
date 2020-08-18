import React from 'react';

import { connect } from 'react-redux';
import { setGrowl } from '../../actions/GrowlActions';

import { ToastContainer, toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GrowlMessage({ growl, setGrowl }) {

    const notify = (growl) => {
        toast[growl.type](growl.msg);
        setGrowl(null)
    }

    return (
        <div>
            {growl.msg && notify(growl)}
            <ToastContainer
                position="top-center"
                transition={Flip}
                autoClose={2000}
                hideProgressBar
                newestOnTop
                rtl />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        growl: state.growl.growl
    };
};

const mapDispatchToProps = {
    setGrowl
};

export default connect(mapStateToProps, mapDispatchToProps)(GrowlMessage);