import styled, { keyframes } from "styled-components";

import React from "react";

const App: React.FC = () => {
  return (
    <Base>
      <Modal>
        <Card>
          <p>title</p>
          <button onClick={() => console.log("button")}>click</button>
        </Card>
      </Modal>
      <Backdrop onClick={() => console.log("backdrop")}></Backdrop>
    </Base>
  );
};

const fadeIn = keyframes`
from {
  opacity:0
  scale:0.8
}
to {
  opacity:1
  scale:1
}
`;

const fadeOut = keyframes`
from {
  opacity:1
  scale:1
}
to {
  opacity:0
  scale:0.8
}
`;

const Base = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 500px;
`;
const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.7;
  animation: ${fadeIn} 0.1s ease-in;
`;

const Modal = styled.div`
  z-index: 2;
  width: 100%;
  background-color: white;
  animation: ${fadeIn} 0.3s ease-in;
`;

const Card = styled.div`
  padding: 20px;
`;

export default App;
