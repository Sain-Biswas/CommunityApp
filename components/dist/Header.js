"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Premium_png_1 = require("../public/Premium.png");
var image_1 = require("next/image");
var theme_toggle_1 = require("./ui/theme-toggle");
var avatar_1 = require("./ui/avatar");
var react_icons_1 = require("@radix-ui/react-icons");
function Header() {
    return (React.createElement("header", { className: "flex items-center h-[8vh] bg-primary justify-between" },
        React.createElement(link_1["default"], { href: "/", className: "flex items-center space-x-2" },
            React.createElement(image_1["default"], { src: Premium_png_1["default"], alt: "CONNECT SPHERE", width: 64, height: 64 }),
            React.createElement("h1", { className: "font-bold text-slate-50 font-inter text-2xl " }, "Campus Connect")),
        React.createElement("div", { className: "px-5 flex space-x-2 items-center" },
            React.createElement(avatar_1.Avatar, { className: "w-14 h-14 rounded-full" },
                React.createElement(avatar_1.AvatarImage, { src: "", alt: "" }),
                React.createElement(avatar_1.AvatarFallback, { className: "w-14 h-14 rounded-full" },
                    React.createElement(react_icons_1.PersonIcon, { className: "h-8 w-8" }))),
            React.createElement(theme_toggle_1.ModeToggle, null))));
}
exports["default"] = Header;
