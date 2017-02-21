import React from 'react';

export default function UnDoneItems(props) {

    return (
        <button
            className="filters unDoneItems"
            onClick={props.filterUndone.bind(null,props)}
        >Undone
        </button>
    );

}
