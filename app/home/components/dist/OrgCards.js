"use client";
"use strict";
exports.__esModule = true;
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var OrganisationIcon_1 = require("@/resources/Icons/OrganisationIcon");
var react_avatar_1 = require("@radix-ui/react-avatar");
var react_icons_1 = require("@radix-ui/react-icons");
function OrgCards(_a) {
    var title = _a.title, description = _a.description, image = _a.image, link = _a.link;
    return (React.createElement(card_1.Card, { className: "ring " },
        React.createElement(card_1.CardHeader, { className: "flex gap-2" },
            React.createElement(card_1.CardTitle, { className: "font-bold flex gap-2 items-center text-2xl" },
                React.createElement(react_avatar_1.Avatar, { className: "w-14 h-14 rounded-full" },
                    React.createElement(avatar_1.AvatarImage, { src: image, alt: title }),
                    React.createElement(avatar_1.AvatarFallback, { className: "w-14 h-14 rounded-full" },
                        React.createElement(OrganisationIcon_1["default"], { className: "h-8 w-8" }))),
                title),
            React.createElement(card_1.CardDescription, { className: "text-center" }, description)),
        React.createElement(card_1.CardFooter, { className: "flex justify-end" },
            React.createElement(button_1.Button, null,
                React.createElement("span", null, "See More!"),
                React.createElement(react_icons_1.ChevronRightIcon, { className: "h-6 w-6" })))));
}
exports["default"] = OrgCards;
