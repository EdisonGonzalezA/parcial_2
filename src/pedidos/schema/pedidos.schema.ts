import mongoose from 'mongoose';
export const PedidosSchema = new mongoose.Schema(
  {
    Fecha_Pedido: { type: Date, required: true },
    pizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pizzas' }],
    clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientes' }],
  },
  {
    timestamps: true,
  },
);