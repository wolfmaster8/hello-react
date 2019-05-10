import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Playlists } from '../components/Playlists';

class DashboardPage extends Component{

    render() {
        return (
            <div className="container-fluid">
                <Playlists />
            </div>
        );
    }
}

export default withRouter(DashboardPage);