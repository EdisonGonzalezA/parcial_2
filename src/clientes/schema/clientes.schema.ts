import mongoose from "mongoose";

export const ClientesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },    
});

ClientesSchema.index({ nombre: 1 }, { unique: true });