import React, { FC, Fragment, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal: FC<{
  open: boolean;
  minWidth?: number;
  onClose?: () => void;
}> = ({ open, children, onClose }) => {
  const [drawed, setDrawed] = useState(false);

  console.log({ open, drawed });

  useEffect(() => setDrawed(true), []);

  return (
    <Fragment>
      <Backdrop onClick={onClose} open={open} drawed={drawed}>
        <Container onClick={e => e.stopPropagation()}>{children}</Container>
      </Backdrop>
    </Fragment>
  );
};

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:0.7;
  visibility:visible;
}
`;

const fadeOut = keyframes`
from {
  opacity: 0.7;
}
to {
  opacity:0;  
}
`;

const Backdrop = styled.div<{ open: boolean; drawed: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: black;
  visibility: hidden;
  animation: ${({ open, drawed }) => (drawed ? (open ? fadeIn : fadeOut) : "")}
    2s ease forwards;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

export default Modal;
