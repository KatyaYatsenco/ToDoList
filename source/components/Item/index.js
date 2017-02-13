import React from 'react';

export default function Item(props) {


    return (
        <li className="{props.visibility} listItem">
            <input
                type="checkbox"
                className="checkBox"
                onClick={props.onCheck.bind(null, props)}
            />
            <div
                className="task">
                {props.name}
            </div>

            <button
                className="delete button"
                onClick={props.onDelete.bind(null, props)}
            >X
            </button>
        </li>
    );
}
