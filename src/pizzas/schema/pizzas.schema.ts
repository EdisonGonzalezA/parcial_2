import mongoose from "mongoose";

export const PizzasSchema = new mongoose.Schema({
    nombre: { type: String, required: true },    
});

PizzasSchema.index({ nombre: 1 }, { unique: true });