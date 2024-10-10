"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../contollers/expenseController");
const router = (0, express_1.Router)();
router.get("/", expenseController_1.getExpensesByCategory);
exports.default = router;
