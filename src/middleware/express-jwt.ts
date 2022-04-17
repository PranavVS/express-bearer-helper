import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      [key: string]: any;
    }
  }
}

export const expressJWT = (key: string, JWT_KEY: string, jwtToken?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = jwtToken ? jwtToken : req.bearerToken;
    if (!token) {
      throw new Error(
        "No JWT Token is provided. If you use bearerToken() Middleware then Make Sure it is Applied using express().use(). If you are not Using bearerToken() Middleware then Make Sure you Pass JWT Token as function parameter to expressJWT() Middleware."
      );
    }
    try {
      const jwtPayload = jwt.verify(token, JWT_KEY);
      req[key] = jwtPayload;
    } catch (error) {
      console.log(error);
    }
    next();
  };
};
