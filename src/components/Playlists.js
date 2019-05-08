import React from 'react';
import { spotifyConsume } from '../services/spotify-api';
import { PlaylistCard } from './PlaylistCard';
import { PlaylistCardSkeleton } from './PlaylistCardSkeleton';

export class Playlists extends React.Component {

    state = {
        playlists : [],
        loading: true
    };

    componentDidMount() {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        spotifyConsume.get('/me/playlists')
            .then((response) => {
                console.log(response.data.items)
                this.setState({playlists: response.data.items, loading: false})
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    render() {
        const {playlists, loading} = this.state;
        if(loading) return <PlaylistCardSkeleton />;
        return (
            <div>
                <ul>
                {playlists.map(playlist => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
                </ul>
            </div>
        );
    }
}