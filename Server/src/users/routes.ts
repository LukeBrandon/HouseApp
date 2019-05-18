// User routes
import { Request, Response } from "express";

import { createLogger } from "bunyan";
import { app } from "../index";

const log = createLogger({
    name: "Users",
});

app.post("/login", (req: Request, res: Response) => {
    log.info(`Login attempt for ${req.body.email}`);
    let response = {
        success: false,
        email: req.body.email,
    }
    // if database contains email and password
    if (req.body.email === "lukebrandon68@gmail.com" && req.body.password === "yes") {
        response.success = true;
        res.send(response);
    }
    res.send(response);
});
