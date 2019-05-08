import React from 'react';
import {get} from 'lodash';
import {UserContext} from '../consts';
import Logo from '../assets/images/logo.png';

export const Header = () => {
    return (
        <div className="menu-header d-flex justify-content-between align-items-center p-2 pl-4 pr-4">
            <div className="d-flex justify-content-between align-items-center">
                <img alt="logo" src={Logo} width={40} />
                <h2 className="ml-1 green-color">SpotifyPlay </h2>
            </div>
            <UserContext.Consumer>
                {(context) => (
                    <div className="d-flex align-items-center">
                        <img alt={context.userInfo.display_name} height={40} width={40} className="rounded-circle" src={get(context, 'userInfo.images[0].url')} />
                        <p className="black-color m-0 ml-2">{context.userInfo.display_name}</p>
                        <button className="ml-3 btn btn-default spotify-button">Logout</button>
                    </div>
                )}
            </UserContext.Consumer>
        </div>
    );
};