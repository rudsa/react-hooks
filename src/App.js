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
};

export default App;
