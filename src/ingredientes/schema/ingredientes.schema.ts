import mongoose from 'mongoose';
export const IngredientesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    pizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pizzas' }],
  },
  {
    timestamps: true,
  },
);