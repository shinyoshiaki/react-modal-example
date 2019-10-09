import React, { Fragment, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal: React.FC<{
  open: boolean;
  minWidth?: number;
  onClose?: () => void;
}> = ({ minWidth, children, open, onClose }) => {
  const [opened, setOpened] = useState(open);

  useEffect(() => {
    open && setOpened(true);
  }, [open]);

  return (
    <Fragment>
      {(opened || open) && (
        <Base open={open} minWidth={minWidth}>
          <Container open={open}>{children}</Container>
          <Backdrop open={open} onClick={onClose}></Backdrop>
        </Base>
      )}
    </Fragment>
  );
};

const fadeIn = keyframes`
from {
  opacity:0
  scale:0.8
}
to {
  opacity: 0.7;
  scale:1
}
`;

const fadeOut = keyframes`
from {
  opacity: 0.7;
  scale:1
}
to {
  opacity:0
  scale:0.8
  visibility:hidden
}
`;

const Base = styled.div<{ open: boolean; minWidth?: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-width: ${({ minWidth }) => minWidth || 400}px;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.1s ease-in forwards;
`;
const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.7;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.1s ease-in;
`;

const Container = styled.div<{ open: boolean }>`
  z-index: 2;
  width: 100%;
  background-color: white;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in;
`;

export default Modal;
