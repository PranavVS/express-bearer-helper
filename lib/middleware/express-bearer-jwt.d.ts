import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            [key: string]: any;
        }
    }
}
export declare const expressBearerTokenJWT: (key: string, JWT_KEY: string) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=express-bearer-jwt.d.ts.map