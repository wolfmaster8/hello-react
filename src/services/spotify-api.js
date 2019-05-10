import axios from 'axios';

export const spotifyLogin = axios.create({
    baseURL: 'https://accounts.spotify.com/authorize',
})

export const spotifyConsume = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    defaultInterceptors: true
})

