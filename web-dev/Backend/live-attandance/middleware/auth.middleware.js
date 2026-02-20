import  jwt  from "jsonwebtoken";

export const VerifyUser = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

     if (!token) {
       res
         .status(401)
         .json(ErrorResponse("Unauthorized, token missing or invalid"));
       return;
     }
    
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    
    req.userId = decodedToken.id
    req.role = decodedToken.role
    next()
};
