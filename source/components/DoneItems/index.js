import React from 'react';

export default function DoneItems(props) {

    return (
        <button
            className="doneItems filters"
            onClick={props.filterDone.bind(null,props)}
        >Done
        </button>
    );

}
