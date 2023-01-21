import styled from "styled-components";

export const MainFormContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin: 40px auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const MainInputContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  margin-left: 20px;

  input {
    width: 100%;
    border: 0;
    border-radius: 4px;
    border-bottom: 2px solid #636e72;
    padding: 10px 2px;
    margin-bottom: 20px;
    font-size: 14px;
    outline: 0;
  }
  @media (max-width:600px) {
   
  }
`;
export const HeaderContainerInfoAvatar = styled.div`
  text-align: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const HeaderAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const MainFormButtons = styled.div`
  flex: 1;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 40px;
  display: grid;
  margin-right: 20px;

  @media (max-width: 600px) {
    display: flex;
    padding: 0 20px;
    flex-direction: column;

    button{
      width: 90%;
      margin: 0 auto;
    }
  }
`;
export const MainAddAmount = styled.button`
  flex: 1;
  flex-direction: row;
  background-color: #27ae60;
  padding: 40px;
  border: 0;
  border-radius: 8px;
  color: #fff;
`;
export const MainWithDrawAmount = styled.button`
  flex: 1;
  background-color: #c0392b;
  padding: 40px;
  border: 0;
  border-radius: 8px;
  color: #fff;
`;
export const MainOffSystem = styled.button`
  flex: 1;
  background-color: #f1c40f;
  padding: 40px;
  border: 0;
  border-radius: 8px;
  color: #fff;
`;
export const MainReport = styled.button`
  flex: 1;
  background-color: #2980b9;
  padding: 40px;
  border: 0;
  border-radius: 8px;
  color: #fff;
  text-align: center;
`;
