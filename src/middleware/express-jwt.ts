import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      [key: string]: any;
    }
  }
}

export const expressJWT = (key: string, JWT_KEY: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.bearerToken) {
      throw new Error("'bearerToken' Not Found in Field of request Object.");
    }
    const jwtPayload = jwt.verify(JWT_KEY, req.bearerToken!);
    req[key] = jwtPayload;
  };
};
