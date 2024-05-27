"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`escuchando por el puerto ${PORT}`);
});
app.get("/", (_req, res) => {
    res.send("Hola mundo");
});
