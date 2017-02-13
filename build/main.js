webpackJsonp([0],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App_index__ = __webpack_require__(81);







var defaultState = {
    title: 'Todo list',
    placeholder: "Enter task"
};

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App_index__["a" /* default */], defaultState), document.getElementById('app'));

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListItem_index__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DoneItems_index__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UnDoneItems_index__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UnDoneItems_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UnDoneItems_index__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            count: 0,
            items: [],
            isChecked: false,
            visibility: 'visible'

        };
        _this.inputDidMount = _this.inputDidMount.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.filterDone = _this.filterDone.bind(_this);

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
        key: 'filterDone',
        value: function filterDone(_ref) {
            _objectDestructuringEmpty(_ref);

            var items = this.state.items;

            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                if (item.isChecked == false) {
                    if (this.state.visibility === 'visible') {
                        this.setState({ visibility: "hide" });
                        console.log(item);
                    }
                }
            }
            // this.setState({items})
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(_ref2) {
            var id = _ref2.id;

            var items = this.state.items;

            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                if (item.id == id) {
                    items.splice(index, 1);
                }
            }

            this.setState({ items: items });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(_ref3) {
            var id = _ref3.id;

            var items = this.state.items;

            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                if (item.id == id) {
                    item.isChecked = !item.isChecked;
                    console.log(item.isChecked);
                }
            }

            this.setState({ items: items });
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
                    isChecked: isChecked,
                    visibility: 'visible'
                }]);
                this.setState({ items: newStateItems });
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
                filterDone = this.filterDone;
            var items = this.state.items;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'toDoList',
                { className: 'toDoList' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    { className: 'mainForm' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: 'title' },
                        title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        type: 'text',
                        placeholder: placeholder,
                        ref: inputDidMount
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        type: 'submit',
                        className: 'button',
                        value: 'Add',
                        onClick: handleSubmit
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DoneItems_index__["a" /* default */], { filterDone: filterDone }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ListItem_index__["a" /* default */], { deleteItem: deleteItem, items: items, checkItem: handleInputChange, visibility: this.state.visibility })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = DoneItems;


function DoneItems(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
            className: "doneItems",
            onClick: props.filterDone.bind(null, props)
        },
        "Done"
    );
}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Item;


function Item(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        { className: "listItem" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            type: "checkbox",
            className: "checkBox",
            onClick: props.onCheck.bind(null, props)
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            {
                className: "{props.visibility} task" },
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item_index_js__ = __webpack_require__(83);
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
                checkItem = _props.checkItem,
                visibility = _props.visibility;

            var children = [];
            for (var index = 0, length = items.length; index < length; index++) {
                var item = items[index];
                children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Item_index_js__["a" /* default */], _extends({ key: item.id }, item, { visibility: visibility, onDelete: deleteItem, onCheck: checkItem })));
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

/***/ 85:
/***/ (function(module, exports) {



/***/ })

},[182]);
//# sourceMappingURL=main.js.map