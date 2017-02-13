import React from 'react';

export default function DoneItems(props) {

    return (
        <button
            className="doneItems"
            onClick={props.filterDone.bind(null,props)}
        >Done
        </button>
    );

}
