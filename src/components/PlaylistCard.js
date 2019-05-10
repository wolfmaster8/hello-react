import React from 'react';

export const PlaylistCard = ({playlist}) => (
    <li className="card m-3">
        <div className="card-body d-flex justify-content-between align-items-center">
           <div className="d-flex align-items-center">
               <img alt={playlist.images[0].url} src={playlist.images[0].url} height={200} width={200} />
               <h5 className="card-title ml-3">{playlist.name}</h5>
           </div>
            <a target="_blank" href={playlist.external_urls.spotify}  rel="noopener noreferrer" className="btn btn-default spotify-button">Show List</a>
        </div>
    </li>
);