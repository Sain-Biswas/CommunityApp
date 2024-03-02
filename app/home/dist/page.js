"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var OrgCards_1 = require("./components/OrgCards");
function page() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "grid grid-cols-4 gap-4 p-2 " },
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }),
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }),
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }),
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }),
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }),
            React.createElement(OrgCards_1["default"], { title: "Title", description: "Description", image: "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png", link: "/" }))));
}
exports["default"] = page;
