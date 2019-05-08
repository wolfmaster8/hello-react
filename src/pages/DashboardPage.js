import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class DashboardPage extends Component{
    constructor(props) {
        super(props);
        const hashToken = this.props.location.hash;
        const token = hashToken.split(/(?<=\=)(.*?)(?=\(?&token)/)[1];
        localStorage.setItem('token', `Bearer ${token}`);
        this.state = {
            loading: true
        }
    }


    render() {
        // if(loading) return <p>Loading info...</p>;
        return (
            <div className="container m-3">

            </div>
        );
    }
}

export default withRouter(DashboardPage);