import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #636e72;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
@media (max-width:600px) {
    padding: 20px 30px;
  }
 
`;
export const HeaderContainerInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  max-width: 900px;

  span {
    color: #eae6e5;
    font-size: 36px;
    font-weight: bold;
  }
`;

