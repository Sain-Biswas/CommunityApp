"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("zod");
// import { Users } from "@prisma/client";
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var avatar_1 = require("@/components/ui/avatar");
var react_icons_1 = require("@radix-ui/react-icons");
function ProfileEdit() {
    var formSchema = zod_2.z.object({
        username: zod_2.z.string().min(2, {
            message: "Username must be at least 2 characters."
        })
    });
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            username: ""
        }
    });
    function onSubmit(values) {
        console.log(values);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col justify-center items-center" },
            React.createElement(avatar_1.Avatar, { className: "w-80 h-80 rounded-ful justify-center items-center flex flex-col" },
                React.createElement(avatar_1.AvatarImage, { src: "", alt: "" }),
                React.createElement(avatar_1.AvatarFallback, { className: "w-72 h-72 rounded-full" },
                    React.createElement(react_icons_1.PersonIcon, { className: "h-56 w-56" }))),
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("div", { className: "flex flex-col items-center" },
                    React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8 justify-center items-center flex flex-col" },
                        React.createElement(form_1.FormField, { control: form.control, name: "username", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "justify-center items-center flex flex-col text-white" },
                                    React.createElement(form_1.FormLabel, null, "Username"),
                                    React.createElement(form_1.FormControl, { className: "w-80" },
                                        React.createElement(input_1.Input, __assign({ placeholder: "" }, field))),
                                    React.createElement(form_1.FormDescription, { className: "text-white" }, "This is your public display name."),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement(form_1.FormField, { name: "email", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "justify-center items-center flex flex-col text-white" },
                                    React.createElement(form_1.FormLabel, null, "Email"),
                                    React.createElement(form_1.FormControl, { className: "w-80" },
                                        React.createElement(input_1.Input, __assign({ placeholder: "" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement(button_1.Button, { className: "flex items-center justify-center p-x-10 text-white", type: "submit" }, "Save Changes")))))));
}
exports["default"] = ProfileEdit;
