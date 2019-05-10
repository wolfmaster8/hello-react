import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const PlaylistCardSkeleton = () => (
    <li className="card m-3">
        <div className="card-body d-flex justify-content-between align-items-center">
           <div className="d-flex align-items-center">
               <Skeleton width={200} height={200}/>
               <div className="ml-3">
                   <Skeleton width={300} height={20}/>
               </div>
           </div>
            {/*<a href={playlist.external_urls.spotify} className="btn btn-default spotify-button">Show List</a>*/}
        </div>
    </li>
);