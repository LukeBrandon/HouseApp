"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = require("bunyan");
const index_1 = require("../index");
const log = bunyan_1.createLogger({
    name: "Users",
});
index_1.app.post("/login", (req, res) => {
    log.info(`Login attempt for ${req.body.email}`);
    let response = {
        success: false,
        email: req.body.email,
    };
    // if database contains email and password
    if (req.body.email === "lukebrandon68@gmail.com" && req.body.password === "yes") {
        response.success = true;
        res.send(response);
    }
    res.send(response);
});
//# sourceMappingURL=routes.js.map