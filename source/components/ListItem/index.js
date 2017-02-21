import React, {Component} from 'react';
import Item from '../Item/index.js';


export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        const {items, deleteItem, checkItem,} = this.props;
        const children = [];
        for (let index = 0, length = items.length; index < length; index++) {
            const item = items[index];
            children.push(<Item key={item.id} {...item} onDelete={deleteItem} onCheck={checkItem} />)
        }

            return children;

    }

    render() {
        const {getItems} = this;
        return (
            <ul className="theList">
                {getItems()}
            </ul>
        )
    }
}
