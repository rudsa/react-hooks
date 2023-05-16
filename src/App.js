<<<<<<< HEAD
import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Hide" : "Show"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
=======
import Average from "./Average";

const App = () => {
  return <Average />;
>>>>>>> 0063ddb506ed8e0d54e3d20c16bf520fd8c23e04
};

export default App;
