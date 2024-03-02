"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
var dialog_1 = require("@/components/ui/dialog");
var ProfileEdit_1 = require("./ProfileEdit");
function Edit() {
    return (React.createElement(dialog_1.Dialog, null,
        React.createElement(dialog_1.DialogTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "outline", className: "bg-primary text-2xl p-5 m-10" }, "Edit Profile")),
        React.createElement(dialog_1.DialogContent, { className: "sm:max-w-[425px] " },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, "Edit profile"),
                React.createElement(dialog_1.DialogDescription, null, "Make changes to your profile here. Click save when you're done.")),
            React.createElement(ProfileEdit_1["default"], null),
            React.createElement(dialog_1.DialogFooter, null,
                React.createElement(button_1.Button, { type: "submit" }, "Save changes")))));
}
exports["default"] = Edit;
