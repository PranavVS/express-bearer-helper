"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bearerToken = void 0;
var bearerToken = function () {
    return function (req, res, next) {
        if (!req.headers || !req.headers["authorization"]) {
            next();
        }
        //parse the bearer only if it exists.
        var bearerTokenParts = req.headers["authorization"].split(" ");
        if (bearerTokenParts.length !== 2 || bearerTokenParts[0] !== "Bearer") {
            throw new Error("Authorization Header is Missing or Property Bearer is Missing for Authorization.");
        }
        req.bearerToken = bearerTokenParts[1];
        next();
    };
};
exports.bearerToken = bearerToken;
//# sourceMappingURL=bearer-token.js.map