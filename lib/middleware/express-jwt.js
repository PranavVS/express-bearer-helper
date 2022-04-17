"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressJWT = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var expressJWT = function (key, JWT_KEY, jwtToken) {
    return function (req, res, next) {
        var token = jwtToken ? jwtToken : req.bearerToken;
        if (!token) {
            throw new Error("No JWT Token is provided. If you use bearerToken() Middleware then Make Sure it is Applied using express().use(). If you are not Using bearerToken() Middleware then Make Sure you Pass JWT Token as function parameter to expressJWT() Middleware.");
        }
        try {
            var jwtPayload = jwt.verify(token, JWT_KEY);
            req[key] = jwtPayload;
        }
        catch (error) {
            console.log(error);
        }
        next();
    };
};
exports.expressJWT = expressJWT;
//# sourceMappingURL=express-jwt.js.map