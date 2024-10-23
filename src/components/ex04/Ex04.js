import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 50%;
`;

const Inbox = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const BoxAni = keyframes`
0%{
    transform: rotate(0);
}
100%{
    transform:rotate(360deg);
}`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: navy;
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  &:hover {
    background-color: darkslateblue;
  }
  animation: ${BoxAni} 1s infinite;
`;

const Ex04 = () => {
  return (
    <div>
      <Box $bgcolor="cyan">
        <Inbox></Inbox>
      </Box>
      <Box $bgcolor="darkcyan"></Box>

      <Con>
        <div></div>
      </Con>
    </div>
  );
};

export default Ex04;
