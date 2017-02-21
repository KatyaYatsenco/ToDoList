import React from 'react';

export default function DeletedItems(props) {
    return (
        <button
            className="deletedItems filters"
            onClick={props.filterDeleted.bind(null,props)}
        >Deleted
        </button>
    )
}
