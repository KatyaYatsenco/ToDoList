/**
 * Created by katya on 2/9/17.
 */


class FormView extends React.Component {
    componentWillMount() {
    }
    render() {
        return (
            <div>
                <input
                    type = "text"
                    value = {this.props.value}
                />

                <button onClick = {this.props.submit}>
                    Add
                </button>
            </div>
        );
    }
}


const TodoList = React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },

    addItem: function (e) {

        let itemArray = this.state.items;

        itemArray.push(
            {
                text: this.input.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this.input.value = "";

        e.preventDefault();
    },

    render: function () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={ i =>  this.input = i  } placeholder="enter task">
                        </input>
                        <button type="submit" className="button">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
});

class TodoItems extends React.Component{
    getInitialState() {
        return {
            count: 0
        }
    }

    render() {

        let todoEntries = this.props.entries;

        function selectItem() {
            console.log(this.state.items);
        }

        this.setState({
            count: +1
        });

        function createTasks(item) {
            return (
                <div className="listItem">
                    <li key={this.state.count} onClick={selectItem}>{item.text}</li>
                    <button id={this.state.count} key={this.state.count} className="delete button">X</button>
                </div>
            )
        }

        const listItems = todoEntries.map(createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        )

    }
}



















//
//
// class ClickedItem extends Component {
//     static defaultProps = {
//         click: 0
//     };
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             click: props.click
//         };
//
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.props.onclick();
//         this.setState({
//             click: this.state.click + 1
//         }, function (state) {
//             console.log(' state after click:', this.state);
//         });
//     }
//
//     render() {
//         return (
//             <div className=' clicker' onClick={this.handleClick}>
//                 <h1 className=' app__title'>{this.state.click}</h1>
//             </div>
//         );
//     }
// }
//
//
// class App extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             click: 0
//         };
//
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState({
//             click: this.state.click + 1
//         }, function (state) {
//             console.log(' state after click:', this.state);
//         });
//     }
//
//     render() {
//         return (
//             <div className=' app'>
//                 <input/>
//                 <h1 className=' app__title'>{this.props.title}</h1>
//                 <h1 className=' app__title'>{this.state.click}</h1>
//                 <ClickedItem onclick={this.handleClick}/>
//             </div>
//         );
//     }
// }
