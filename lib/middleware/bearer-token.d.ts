import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            bearerToken?: string;
        }
    }
}
export declare const bearerToken: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=bearer-token.d.ts.map