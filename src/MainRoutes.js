import React from 'react';
import { get } from 'lodash';
import { Switch, Route, withRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { spotifyConsume } from "./services/spotify-api";
import { UserContext } from './consts';
import { Header } from './components/Header';

class MainRoutes extends React.Component {
    constructor(props) {
        super( props );
        const hashToken = this.props.location.hash;
        const token = hashToken.split(/(?<==)(.*?)(?=\(?&token)/)[1];
        localStorage.setItem('token', `Bearer ${token}`);
        const tokenLocal = localStorage.getItem( 'token' );
        if ( tokenLocal && token ) {
            spotifyConsume.defaults.headers.Authorization = tokenLocal;
        } else {
            delete spotifyConsume.defaults.headers.Authorization;
        }

        spotifyConsume.interceptors.response.use( null, (error) => {
            const response = get( error, 'response.data' );
            const status = response.error.status;
            if ( status === 401 ) {
                this.props.history.push( '/' )
            }
        } );

        this.state = {
            userInfo: {}
        };

        this.fetchUserInfo();

    }

    get contextProps() {
        const {
            userInfo,

        } = this.state;

        return { userInfo, logout: this.logout };
    }

    fetchUserInfo = () => {
        spotifyConsume.get( '/me' )
            .then( (response) => {
                console.log(response.data)
                this.setState( { userInfo: response.data, loading: false } );
            } )
            .catch( (error) => {
                console.log( error )
            } )
    };

    logout = () => {
        localStorage.clear();
        this.props.history.push('/')
    }

    render() {
        return (
            <UserContext.Provider value={this.contextProps}>
                <Header/>
                <Switch>
                    <Route path="/me" component={DashboardPage}/>
                </Switch>
            </UserContext.Provider>
        );
    }
}

export default withRouter( MainRoutes );