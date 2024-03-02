"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ChatGroups_1 = require("./components/ChatGroups");
var Header_1 = require("@/components/Header");
var layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "flex h-[92vh]" },
            react_1["default"].createElement("div", { className: "w-64 border-r border-primary hidden md:block" },
                react_1["default"].createElement(ChatGroups_1["default"], null)),
            react_1["default"].createElement("div", { className: "flex-grow" }, children))));
};
exports["default"] = layout;
