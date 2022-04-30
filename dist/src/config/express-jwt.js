"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_jwt_1 = require("express-jwt");
const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
        return authorization.split(' ')[1];
    }
    return null;
};
exports.auth = {
    required: (0, express_jwt_1.expressjwt)({
        secret: 'secret',
        algorithms: ["HS256"],
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: (0, express_jwt_1.expressjwt)({
        secret: 'secret',
        algorithms: ["HS256"],
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};
//# sourceMappingURL=express-jwt.js.map