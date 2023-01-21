import {
  HeaderAvatar,
  HeaderContainerInfoAvatar,
  MainAddAmount,
  MainFormButtons,
  MainFormContainer,
  MainInputContainer,
  MainOffSystem,
  MainReport,
  MainWithDrawAmount,
} from "./styled";
import { useAppDispatch } from "../../hooks/hooks";
import { decrement, increment } from "../../features/Operations/OperationSlice";
import { useState } from "react";
import { Plus } from "phosphor-react";

export function MainForm() {
  
  const dispatch = useAppDispatch();

  const [inputAmount, setInputAmount] = useState("");
  return (
    <>
      <MainFormContainer>
        <MainInputContainer>
          <HeaderContainerInfoAvatar>
            <HeaderAvatar
              src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
              alt="avatar"
            />
            <p>Bem Vindo Luis</p>
          </HeaderContainerInfoAvatar>
          <input
            type="number"
            placeholder="Digite o Valor da transacao"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </MainInputContainer>

        <MainFormButtons>
          <MainAddAmount
            onClick={() => dispatch(increment(Number(inputAmount) || 0))}
          >
            Pagamentos e Recebimentos
          </MainAddAmount>
          <MainWithDrawAmount
            onClick={() => dispatch(decrement(Number(inputAmount) || 0))}
          >
            - Saques / Debitos Contabeis
          </MainWithDrawAmount>
          <MainAddAmount> Receber Valor Contabil</MainAddAmount>
          <MainWithDrawAmount> Mandar Valor Contabil</MainWithDrawAmount>
          <MainOffSystem>Fechar Sistema</MainOffSystem>
          <MainReport>Enviar Relatorio</MainReport>
        </MainFormButtons>
      </MainFormContainer>
    </>
  );
}
