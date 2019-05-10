import React, {Component} from 'react';

class Login extends Component{

    loginSpotify = () => {
        const baseURL = 'https://accounts.spotify.com/authorize';
        const clientId = process.env.REACT_APP_SPOTIFY_CLIENT;
        const uri = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000/me' : 'https://spotifyplay.felipelobo.co/me';
        const redirectUri = encodeURI(uri);
        window.open(`${baseURL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`, '_self')
    };

    render() {
        return (
            <div>
                <button onClick={this.loginSpotify} className="btn btn-default spotify-button">Start!</button>
            </div>
        );
    }
}

export default Login;
