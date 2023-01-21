import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { HeaderContainer} from "./styled";



export function Header() {

  const balance = useAppSelector((state: RootState) => state.operation.valueCash)

  return (
    <HeaderContainer>
   
        <h2>Fluxo de Caixa</h2>
        <h3>
          Saldo : <span style={{color: balance < 0? '#e74c3c' : '#27ae60'}}> R${balance}</span>
        </h3>
   
    </HeaderContainer>
  );
}
