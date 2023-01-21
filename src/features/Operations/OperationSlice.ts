import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";

interface OperationStateProps {
  valueCash: number;
  valueReserveFinancial: number;
}
const initialState = {
  valueCash: 0.0,
  valueReserveFinancial: 9000,
} as OperationStateProps;

export const operationSlice = createSlice({
  name: "operation",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.valueCash += action.payload;
      toast.success("Pagamento/Recebimento Feito");
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.valueCash -= action.payload;
      toast.success("Saque/Debito Realizado");
    },
    incrementByAmountReserve: (state, action: PayloadAction<number>) => {
      state.valueReserveFinancial += action.payload;
      toast.warn("Valor Para Movimento Contabil Enviado");
    },
    decrementByAmountReserve: (state, action: PayloadAction<number>) => {
      state.valueReserveFinancial -= action.payload;
      toast.info("Verificar Valor final expediente !");
    },
  },
});
export const {
  increment,
  decrement,
  decrementByAmountReserve,
  incrementByAmountReserve,
} = operationSlice.actions;
export const selectOperation = (state: RootState) => state.operation.valueCash;
export default operationSlice.reducer;
