import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    export interface Request {
      bearerToken?: string;
    }
  }
}

export const bearerToken = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers || !req.headers["authorization"]) {
      next();
    }
    //parse the bearer only if it exists.
    const bearerTokenParts = req.headers["authorization"]!.split(" ");
    if (bearerTokenParts.length !== 2 || bearerTokenParts[0] !== "Bearer") {
      throw new Error(
        "Authorization Header is Missing or Property Bearer is Missing for Authorization."
      );
    }
    req.bearerToken = bearerTokenParts[1];
    next();
  };
};
