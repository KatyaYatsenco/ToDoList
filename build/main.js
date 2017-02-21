webpackJsonp([0],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App_index__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_index_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__source_index_css__);









var defaultState = {
    title: 'Todo list',
    placeholder: "   ..enter a task"
};

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App_index__["a" /* default */], defaultState), document.getElementById('app'));

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListItem_index__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DoneItems_index__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UndoneItems_index__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AllItems_index__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DeletedItems__ = __webpack_require__(84);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            items: [],
            deletedItems: [],
            fullListItems: [],
            isChecked: false,
            deleted: false

        };
        _this.inputDidMount = _this.inputDidMount.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.filterDone = _this.filterDone.bind(_this);
        _this.filterUndone = _this.filterUndone.bind(_this);
        _this.filterAll = _this.filterAll.bind(_this);
        _this.filterDeleted = _this.filterDeleted.bind(_this);

        return _this;
    }

    _createClass(App, [{
        key: 'addItem',
        value: function addItem(e) {
            var itemsArray = this.state.items;
            itemsArray.push(this.input.value);
            this.setState({
                items: itemsArray
            });
            e.preventDefault();
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(e) {
            var items = this.state.items;
            var deletedItems = this.state.deletedItems;
            var target = e.id;
            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                var targetIndex = index;

                if (item.id == target) {
                    console.log(targetIndex);
                    deletedItems.push(item);
                    items.splice(targetIndex, 1);
                }
                this.setState({ items: items, deletedItems: deletedItems });
            }
        }
    }, {
        key: 'filterDeleted',
        value: function filterDeleted() {
            var deletedItems = this.state.deletedItems;
            console.log(deletedItems);
            this.setState({ items: deletedItems });
        }
    }, {
        key: 'filterDone',
        value: function filterDone() {
            var isCheckedItems = [];
            var fullListItems = this.state.fullListItems;
            for (var index = 0, length = fullListItems.length; index < length; index++) {
                var item = fullListItems[index];
                if (item.isChecked === true) {
                    isCheckedItems.push(item);
                }
            }

            this.setState({ items: isCheckedItems });
        }
    }, {
        key: 'filterUndone',
        value: function filterUndone() {
            var isUncheckedItems = [];
            var fullListItems = this.state.fullListItems;
            // this.setState({isUncheckedItems: []});
            for (var index = 0, length = fullListItems.length; index < length; index++) {
                var item = fullListItems[index];
                if (item.isChecked === false) {
                    isUncheckedItems.push(item);
                }
            }

            this.setState({ items: isUncheckedItems });
        }
    }, {
        key: 'filterAll',
        value: function filterAll() {
            var fullListItems = this.state.fullListItems;
            this.setState({ items: fullListItems });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(_ref) {
            var id = _ref.id;

            var items = this.state.items;
            var fullListItems = this.state.fullListItems;

            for (var index = 0, itemsLength = items.length; index < itemsLength; index++) {
                var item = items[index];
                var item2 = fullListItems[index];
                if (item.id == id || item2.id == id) {
                    item.isChecked = !item.isChecked;
                }
            }

            this.setState({ items: items, fullListItems: fullListItems });
        }
    }, {
        key: 'inputDidMount',
        value: function inputDidMount(input) {
            this.input = input;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var value = this.input.value;
            var isChecked = this.state.isChecked;
            var prevStateItems = this.state.items;

            if (value !== '') {
                var newStateItems = [].concat(_toConsumableArray(prevStateItems), [{
                    name: value,
                    id: Date.now(),
                    isChecked: isChecked
                }]);
                this.setState({ items: newStateItems, fullListItems: newStateItems });
            }

            event.preventDefault();
            this.input.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                placeholder = _props.placeholder;
            var inputDidMount = this.inputDidMount,
                handleSubmit = this.handleSubmit,
                deleteItem = this.deleteItem,
                handleInputChange = this.handleInputChange,
                filterDone = this.filterDone,
                filterUndone = this.filterUndone,
                filterAll = this.filterAll,
                filterDeleted = this.filterDeleted;
            var items = this.state.items;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'toDoList',
                { className: 'toDoList' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    { className: 'mainForm' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: 'formTitle' },
                        title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        className: 'inputTask',
                        type: 'text',
                        placeholder: placeholder,
                        ref: inputDidMount
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        type: 'submit',
                        className: 'submitTask',
                        value: 'Add',
                        onClick: handleSubmit
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'content',
                    { className: 'content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'navigationMenu' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__DoneItems_index__["a" /* default */], { filterDone: filterDone }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__UndoneItems_index__["a" /* default */], { filterUndone: filterUndone }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AllItems_index__["a" /* default */], { filterAll: filterAll }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DeletedItems__["a" /* default */], { filterDeleted: filterDeleted })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ListItem_index__["a" /* default */], { deleteItem: deleteItem, items: items, checkItem: handleInputChange })
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = AllItems;


function AllItems(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
            className: "allItems filters",
            onClick: props.filterAll.bind(null, props)
        },
        "All"
    );
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = DeletedItems;


function DeletedItems(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
            className: "deletedItems filters",
            onClick: props.filterDeleted.bind(null, props)
        },
        "Deleted"
    );
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = DoneItems;


function DoneItems(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
            className: "doneItems filters",
            onClick: props.filterDone.bind(null, props)
        },
        "Done"
    );
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Item;


function Item(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        { className: "listItem" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            type: "checkbox",
            className: "checkBox",
            onClick: props.onCheck.bind(null, props),
            checked: props.isChecked ? "checked" : ""
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            {
                className: "task" },
            props.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            {
                className: "delete button",
                onClick: props.onDelete.bind(null, props)
            },
            "X"
        )
    );
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item_index_js__ = __webpack_require__(86);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ListItem = function (_Component) {
    _inherits(ListItem, _Component);

    function ListItem(props) {
        _classCallCheck(this, ListItem);

        var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this.getItems = _this.getItems.bind(_this);
        return _this;
    }

    _createClass(ListItem, [{
        key: 'getItems',
        value: function getItems() {
            var _props = this.props,
                items = _props.items,
                deleteItem = _props.deleteItem,
                checkItem = _props.checkItem;

            var children = [];
            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Item_index_js__["a" /* default */], _extends({ key: item.id }, item, { onDelete: deleteItem, onCheck: checkItem })));
            }

            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            var getItems = this.getItems;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'theList' },
                getItems()
            );
        }
    }]);

    return ListItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = ListItem;

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = UnDoneItems;


function UnDoneItems(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
            className: "filters unDoneItems",
            onClick: props.filterUndone.bind(null, props)
        },
        "Undone"
    );
}

/***/ })

},[185]);
//# sourceMappingURL=main.js.map