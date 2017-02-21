import React from 'react';

export default function AllItems(props) {

    return (
        <button
            className="allItems filters"
            onClick={props.filterAll.bind(null,props)}
        >All
        </button>
    );

}
