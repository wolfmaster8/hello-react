import React, {Component} from 'react';
import Login from '../components/Login'
import Logo from '../assets/images/logo.png';

class LoginPage  extends Component{

    render() {
        return (
            <div className="container p-3 mt-4 text-center">
                <section>
                    <div className="d-flex align-items-center justify-content-center">
                        <img alt="logo" src={Logo} width={40} />
                        <h2 className="ml-1 green-color">SpotifyPlay </h2>
                    </div>
                    <p className="text-muted mb-4">Let's play with Spotify</p>
                    <Login/>
                </section>
            </div>
        );
    }
}

export default LoginPage ;