import React, { useState} from "react";
import Tracklist from '../Tracklist/Tracklist';
import './SearchResult.css'

function SearchResult({tracklist, onAdd}) {
    return (
        <>
            <div className="searchResult">
                <h1>Search Results</h1>
                <Tracklist tracklist={tracklist} onAdd={onAdd}/>
            </div>
        </>
    )
}

export default SearchResult;