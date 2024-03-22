import mongoose from 'mongoose';
export const PedidosSchema = new mongoose.Schema(
  {
    Fecha_Pedido: { type: Date, required: true },
    ID_Pizza: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ID_Pizza' }],
    ID_Cliente: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ID_Cliente' }],
  },
  {
    timestamps: true,
  },
);