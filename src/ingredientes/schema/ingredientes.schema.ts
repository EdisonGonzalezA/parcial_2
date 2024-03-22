import mongoose from 'mongoose';
export const IngredientesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    ID_Pizza: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ID_Pizza' }],
  },
  {
    timestamps: true,
  },
);