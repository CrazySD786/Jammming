import React from 'react';
import './Track.css'

function Track({image, name, artist, album, addButton, onAdd, onRemove, index, id}) {
    function onClick() {
        addButton ? onAdd(index) : onRemove(id);
    }
    console.log(image)

    return (
        <>
            <div className='track'>
                <div className='start'>
                    <div className='image'>
                        <img src={image} />
                    </div>
                    <div className='text'>
                        <h2>{name}</h2>
                        <h3>{artist} | {album}</h3>
                    </div>
                </div>
                <div className='btn'>
                    {addButton && <button onClick={onClick}><i class="fa fa-plus"></i></button>}
                    {!addButton && <button onClick={onClick}><i class="fa fa-minus"></i></button>}
                </div>
            </div>
        </>
    )
}

export default Track;