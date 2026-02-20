import { ClassModel } from "../models/class.model";
import { ClassSchema } from "../schema/schema.js";

export const createClass = async (req, res) => {
  const parsedData = ClassSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

    const { className } = parsedData.data;
    
    try {
        await ClassModel.create({
            className
        })
    } catch (error) {
        
    }
};
