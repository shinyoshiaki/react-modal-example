import React, { FC, useState } from "react";

import Modal from "./Modal";
import styled from "styled-components";

const App: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(p => !p)}>open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Card>
          <p>title</p>
          <button onClick={() => setOpen(false)}>click</button>
        </Card>
      </Modal>
    </div>
  );
};

const Card = styled.div`
  padding: 20px;
`;

export default App;
