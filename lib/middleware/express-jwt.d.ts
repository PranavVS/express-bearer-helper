import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            [key: string]: any;
        }
    }
}
export declare const expressJWT: (key: string, JWT_KEY: string, jwtToken?: string | undefined) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=express-jwt.d.ts.map