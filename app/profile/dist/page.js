"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var OrgCards_1 = require("../home/components/OrgCards");
function Profile() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "flex bg-[#1E5799] dark:bg-[#173353]" },
            React.createElement("div", { className: " h-[92vh] w-[65%] " }),
            React.createElement("div", { className: "grid w-[34%] flex-grow h-full gap-4 p-5" },
                React.createElement(OrgCards_1["default"], { title: "Organizations", description: "These are the organizations you are a part of." }),
                React.createElement(OrgCards_1["default"], { title: "Events", description: "These are the events you are a part of." })))));
}
exports["default"] = Profile;
