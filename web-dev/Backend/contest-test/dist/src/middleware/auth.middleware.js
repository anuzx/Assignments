import { ErrorResponse } from "../utility/ApiResponse.js";
import jwt from "jsonwebtoken";
export const VerifyUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = { id: decoded.id, role: decoded.role };
        next();
    }
    catch (error) {
        return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
    }
};
export const AccessibleBy = (role = []) => {
    return function (req, res, next) {
        if (!req.user.id) {
            return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
        }
        if (!role.includes(req.user.role)) {
            return res.status(403).json(ErrorResponse("FORBIDDEN"));
        }
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map