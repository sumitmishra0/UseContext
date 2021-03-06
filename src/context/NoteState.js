import React, { useState } from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Sumit",
    class: "5b"
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Amit",
        class: "10b"
      });
    }, 5000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
