import React, { FC, useState } from "react";

import Modal from "./Modal";
import styled from "styled-components";

const App: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      {[...Array(40)].map((_, i) => (
        <p key={i}>a</p>
      ))}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          console.log("close");
        }}
      >
        <Card>
          <p>title</p>
          <button
            onClick={() => {
              setOpen(false);
              console.log("form");
            }}
          >
            click
          </button>
        </Card>
      </Modal>
    </div>
  );
};

const Card = styled.div`
  padding: 20px;
`;

export default App;
