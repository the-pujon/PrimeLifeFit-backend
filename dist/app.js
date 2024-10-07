"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFoundRouteHandler_1 = __importDefault(require("./app/middlewares/notFoundRouteHandler"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: "true",
        message: "Welcome to API",
    });
});
app.use(notFoundRouteHandler_1.default);
app.use(globalErrorHandler_1.default);
exports.default = app;
