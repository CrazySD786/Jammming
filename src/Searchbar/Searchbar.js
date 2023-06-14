import React, { useState} from "react";


function Searchbar({onSubmit}) {
    return (
        <>
            <form method="post" onSubmit={onSubmit}>
                <input name="songName" type="text" placeholder="Enter song name" />
                <input type="submit"/>
            </form>
        </>
    )
}


export default Searchbar;