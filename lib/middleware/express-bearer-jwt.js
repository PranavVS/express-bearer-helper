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
exports.expressBearerTokenJWT = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var expressBearerTokenJWT = function (key, JWT_KEY) {
    return function (req, res, next) {
        // headers
        if (!req.headers && !req.headers["authorization"]) {
            throw new Error("Headers are not Defined or Authorization Token Not Found.");
        }
        var bearerTokenParts = req.headers["authorization"].split(" ");
        if (bearerTokenParts.length !== 2 || bearerTokenParts[0] !== "Bearer") {
            throw new Error("Authorization Header is Missing or Property Bearer is Missing for Authorization.");
        }
        var jwtToken = bearerTokenParts[1];
        var jwtPayload = jwt.verify(JWT_KEY, jwtToken);
        req[key] = jwtPayload;
    };
};
exports.expressBearerTokenJWT = expressBearerTokenJWT;
//# sourceMappingURL=express-bearer-jwt.js.map