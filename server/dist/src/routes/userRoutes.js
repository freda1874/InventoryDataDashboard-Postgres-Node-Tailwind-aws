"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../contollers/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.getUsers);
exports.default = router;
