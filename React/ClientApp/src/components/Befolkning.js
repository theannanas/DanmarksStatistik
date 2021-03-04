import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Befolkning';

class FetchData extends Component {
    componentDidMount() {
        this.props.requestBefolkning();
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.befolkning}</h1>
            </div>
        );
    }
}

export default connect(
    state => state.befolkning,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
