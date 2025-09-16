import mongoose, { Schema,model } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true }
}, { timestamps: true });


export const Item = model("Item", itemSchema);
