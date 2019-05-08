import axios from 'axios';

export const spotifyAccount = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
    defaultInterceptors: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/JSON',
        'credentials': 'same-origin',
        'Authorization': `Basic ${new Buffer(process.env.REACT_APP_SPOTIFY_CLIENT+':'+process.env.REACT_APP_SPOTIFY_SECRET).toString('base64')}`
    }
});

export const spotifyLogin = axios.create({
    baseURL: 'https://accounts.spotify.com/authorize',
})

export const spotifyConsume = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    defaultInterceptors: true
})

