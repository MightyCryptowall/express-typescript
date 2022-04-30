"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
require("dotenv").config();
// Function to hash users password
const hash = (password) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate salt
    const salt = yield bcryptjs_1.default.genSalt(10);
    // Hash the password
    password = yield bcryptjs_1.default.hash(password, salt);
    return password;
});
// Function to compare hashed password's
const compare = (hash, password) => __awaiter(void 0, void 0, void 0, function* () {
    return bcryptjs_1.default.compare(hash, password);
});
// Function to generate tokens
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET || "", {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
module.exports = {
    hash,
    compare,
    generateToken,
};
//# sourceMappingURL=utils.js.map