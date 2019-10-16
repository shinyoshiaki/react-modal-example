import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const Modal: FC<{
  open: boolean;
  minWidth?: number;
  onClose?: () => void;
}> = ({ open, children, onClose }) => {
  return (
    <Base open={open}>
      <Backdrop onClick={onClose} open={open}>
        <Container open={open} onClick={e => e.stopPropagation()}>
          {children}
        </Container>
      </Backdrop>
    </Base>
  );
};

const Base = styled.div<{ open: boolean }>`
  opacity: ${({ open }) => (open ? `0.7` : `0`)};
  transition: opacity 0.3s;
`;

const fadeIn = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`;

const fadeOut = keyframes`
from {
  opacity: 0.7;
}
to {
  opacity:0;
  visibility:hidden;
}
`;

const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(1, 1, 1, 0.7);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in forwards;
`;

const Container = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

export default Modal;
