"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var OrgCards_1 = require("../home/components/OrgCards");
var avatar_1 = require("@/components/ui/avatar");
var react_icons_1 = require("@radix-ui/react-icons");
var Edit_1 = require("./components/Edit");
function Profile() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "flex bg-[#1E5799] dark:bg-[#173353]" },
            React.createElement("div", { className: "flex flex-col h-[92vh] w-[65%] space-y-4" },
                React.createElement("div", { className: "flex flex-col justify-center items-center" },
                    React.createElement(avatar_1.Avatar, { className: "w-80 h-80 rounded-ful justify-center items-center flex flex-col" },
                        React.createElement(avatar_1.AvatarImage, { src: "", alt: "" }),
                        React.createElement(avatar_1.AvatarFallback, { className: "w-72 h-72 rounded-full" },
                            React.createElement(react_icons_1.PersonIcon, { className: "h-56 w-56" }))),
                    React.createElement("div", { className: "flex flex-col items-center justify-center space-y-4" },
                        React.createElement("p", null,
                            React.createElement("span", { className: "text-3xl font-bold " }, "Name: "),
                            React.createElement("span", { className: "text-4xl font-extrabold" }, "John Doe")),
                        React.createElement("p", null,
                            React.createElement("span", { className: "text-3xl font-bold " }, "Email: "),
                            React.createElement("span", { className: "text-4xl font-extrabold" }, "Tattasur@gmail.com ")),
                        React.createElement("p", null,
                            React.createElement("span", { className: "text-3xl font-bold" }, "College: "),
                            React.createElement("span", { className: "text-4xl font-extrabold" }, "University of Texas at Dallas")),
                        React.createElement("div", { className: "mt-10" },
                            React.createElement(Edit_1["default"], null))))),
            React.createElement("div", { className: "grid w-[34%] flex-grow h-full gap-4 p-5" },
                React.createElement(OrgCards_1["default"], { title: "Organizations", description: "These are the organizations you are a part of." }),
                React.createElement(OrgCards_1["default"], { title: "Events", description: "These are the events you are a part of." })))));
}
exports["default"] = Profile;
