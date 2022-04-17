import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      [key: string]: any;
    }
  }
}

export const expressBearerTokenJWT = (key: string, JWT_KEY: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // headers
    if (!req.headers && !req.headers["authorization"]) {
      throw new Error(
        "Headers are not Defined or Authorization Token Not Found."
      );
    }
    const bearerTokenParts = req.headers["authorization"]!.split(" ");
    if (bearerTokenParts.length !== 2 || bearerTokenParts[0] !== "Bearer") {
      throw new Error(
        "Authorization Header is Missing or Property Bearer is Missing for Authorization."
      );
    }
    const jwtToken = bearerTokenParts[1];
    const jwtPayload = jwt.verify(JWT_KEY, jwtToken);
    req[key] = jwtPayload;
  };
};
