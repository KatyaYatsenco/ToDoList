'use strict';

import React, {Component} from 'react';
import ListItem from '../ListItem/index';
import DoneItems from  '../DoneItems/index';
import UndoneItems from '../UndoneItems/index';
import AllItems from '../AllItems/index';
import DeletedItems from '../DeletedItems';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            deletedItems: [],
            fullListItems: [],
            isChecked: false,
            deleted: false

        };
        this.inputDidMount = this.inputDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.filterDone = this.filterDone.bind(this);
        this.filterUndone = this.filterUndone.bind(this);
        this.filterAll = this.filterAll.bind(this);
        this.filterDeleted = this.filterDeleted.bind(this);

    }

    addItem(e) {
        let itemsArray = this.state.items;
        itemsArray.push(this.input.value);
        this.setState({
            items: itemsArray
        });
        e.preventDefault();

    }


    deleteItem(e) {
        const items = this.state.items;
        const deletedItems = this.state.deletedItems;
        const target = e.id;
        for (let index = 0, length = items.length; index < length; index++) {
            const item = items[index];
            const targetIndex = index;

            if (item.id == target) {
                console.log(targetIndex);
                deletedItems.push(item);
                items.splice(targetIndex, 1);
            }
            this.setState({items: items, deletedItems: deletedItems});

        }
    }


    filterDeleted() {
        const deletedItems = this.state.deletedItems;
        console.log(deletedItems);
        this.setState({items: deletedItems});

    }

    filterDone() {
        const isCheckedItems = [];
        const fullListItems = this.state.fullListItems;
        for (let index = 0, length = fullListItems.length; index < length; index++) {
            const item = fullListItems[index];
            if (item.isChecked === true) {
                isCheckedItems.push(item);
            }
        }

        this.setState(
            {items: isCheckedItems}
        );
    }

    filterUndone() {
        const isUncheckedItems = [];
        const fullListItems = this.state.fullListItems;
        // this.setState({isUncheckedItems: []});
        for (let index = 0, length = fullListItems.length; index < length; index++) {
            const item = fullListItems[index];
            if (item.isChecked === false) {
                isUncheckedItems.push(item);
            }
        }

        this.setState(
            {items: isUncheckedItems}
        );
    }

    filterAll() {
        const fullListItems = this.state.fullListItems;
        this.setState({items: fullListItems});
    }

    handleInputChange({id}) {
        const items = this.state.items;
        const fullListItems = this.state.fullListItems;

        for (let index = 0, itemsLength = items.length; index < itemsLength; index++) {
            const item = items[index];
            const item2 = fullListItems[index];
            if (item.id == id) {
                item.isChecked = !item.isChecked;
            }
            if(item2.id == id) {
                item.isChecked = !item.isChecked;
            }
        }

        this.setState({items, fullListItems})
    }

    inputDidMount(input) {
        this.input = input;
    }


    handleSubmit(event) {
        const value = this.input.value;
        const isChecked = this.state.isChecked;
        const prevStateItems = this.state.items;

        if (value !== '') {
            const newStateItems = [...prevStateItems, {
                name: value,
                id: Date.now(),
                isChecked: isChecked,
            }];
            this.setState({items: newStateItems, fullListItems: newStateItems});
        }

        event.preventDefault();
        this.input.value = '';
    }


    render() {

        const {title, placeholder} = this.props;

        const {
            inputDidMount,
            handleSubmit,
            deleteItem,
            handleInputChange,
            filterDone,
            filterUndone,
            filterAll,
            filterDeleted
        } = this;

        const {items} = this.state;


        return (
            <toDoList className="toDoList">
                <form className="mainForm">
                    <h1 className='formTitle'>{title}</h1>

                    <input
                        className="inputTask"
                        type="text"
                        placeholder={placeholder}
                        ref={inputDidMount}
                    />
                    <input
                        type="submit"
                        className="submitTask"
                        value='Add'
                        onClick={handleSubmit}
                    />
                </form>
                <content className="content">
                    <div className="navigationMenu">

                        <DoneItems filterDone={filterDone}/>
                        <UndoneItems filterUndone={filterUndone}/>
                        <AllItems filterAll={filterAll}/>
                        <DeletedItems filterDeleted={filterDeleted}/>

                    </div>

                    <ListItem deleteItem={deleteItem} items={items} checkItem={handleInputChange} />
                </content>
            </toDoList>
        );
    }
}


