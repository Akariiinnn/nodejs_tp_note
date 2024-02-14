import mongoose from "mongoose";
import {ActusSchema} from "../schemas/actus.schema";

export const ActusModel = mongoose.model('actus', ActusSchema)
