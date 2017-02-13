'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

import ListItem from '../ListItem/index';
import DoneItems from  '../DoneItems/index';
import UnDoneItems from '../UnDoneItems/index';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            items: [],
            isChecked: false,
            visibility: 'visible'


        };
        this.inputDidMount = this.inputDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.filterDone = this.filterDone.bind(this);

    }

    addItem(e) {
        let itemsArray = this.state.items;
        itemsArray.push(this.input.value);
        this.setState({
            items: itemsArray
        });
        e.preventDefault();

    }

    filterDone({}) {
        const items = this.state.items;


        for (let index = 0, length = items.length; index < length; index++) {
            const item = items[index];
            if (item.isChecked == false) {
                if(this.state.visibility === 'visible') {
                    this.setState({visibility: "hide"});
                    console.log(item);
                }
            }
        }
        // this.setState({items})

    }


    deleteItem({id}) {
        const items = this.state.items;

        for (let index = 0, length = items.length; index < length; index++) {
            const item = items[index];
            if (item.id == id) {
                items.splice(index, 1);
            }
        }

        this.setState({items})
    }


    handleInputChange({id}) {
        const items = this.state.items;

        for (let index = 0, length = items.length; index < length; index++) {
            const item = items[index];
            if (item.id == id) {
                item.isChecked = !item.isChecked;
                console.log(item.isChecked);
            }
        }

        this.setState({items})
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
                visibility: 'visible'
            }];
            this.setState({items: newStateItems});
        }

        event.preventDefault();
        this.input.value = '';
    }

    render() {

        const {title, placeholder} = this.props;

        const {inputDidMount, handleSubmit, deleteItem, handleInputChange, filterDone} = this;

        const {items} = this.state;


        return (
            <toDoList className="toDoList">
                <form className="mainForm">
                    <h1 className='title'>{title}</h1>

                    <input
                        type="text"
                        placeholder={placeholder}
                        ref={inputDidMount}
                    />
                    <input
                        type="submit"
                        className="button"
                        value='Add'
                        onClick={handleSubmit}
                    />
                </form>

                <DoneItems filterDone={filterDone}/>

                <ListItem deleteItem={deleteItem} items={items} checkItem={handleInputChange} visibility={this.state.visibility}/>
            </toDoList>
        );
    }
}


