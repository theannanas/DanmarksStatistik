import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Befolkning';

class FetchData extends Component {
    componentWillMount() {
        this.props.requestBefolkning();
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.befolkning[0]}</h1>
                <p>{this.props.befolkning[1]}</p>
                {renderBefolkningTable(this.props)}
            </div>
        );
    }
}

function renderBefolkningTable(props) {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Unit</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.befolkning[0]}</td>
                <td>{props.befolkning[1]}</td>
                <td>{props.befolkning[2]}</td>
                <td>{props.befolkning[3]}</td>
            </tr>
            {/*props.befolkning[2].forEach(v => 
                <tr key={v}>
                    <td>{v}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )*/}
            </tbody>
        </table>
    );
}

export default connect(
    state => state.befolkning,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
